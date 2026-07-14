import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize GoogleGenAI securely on the server-side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for secure Gemini Search Grounding
  app.post("/api/hockey-search", async (req, res) => {
    try {
      const { query } = req.body;
      if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Query is required" });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: query,
        config: {
          systemInstruction: "You are an expert Indian sports journalist and advisor. Your role is to answer questions about hockey (including Field Hockey, Soft Hockey, Hockey India League, government sports schemes, rules, Hockey India championships, etc.). Answer clearly, energetically, and factually based on official Search Grounding. Cite official websites and provide links where available in the formatting. Always remain helpful, positive, and direct.",
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "No response generated.";
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

      // Map grounding chunks to clean source links
      const citations = chunks
        .map((chunk: any) => {
          if (chunk.web) {
            return {
              title: chunk.web.title || "Official Resource",
              uri: chunk.web.uri,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Remove duplicate citations based on URI
      const uniqueCitations = Array.from(new Map(citations.map((item: any) => [item.uri, item])).values());

      return res.json({ text, citations: uniqueCitations });
    } catch (error: any) {
      console.error("Gemini Search Grounding Error:", error);
      return res.status(500).json({ 
        error: "Failed to fetch real-time hockey intelligence from Gemini", 
        message: error.message || "Unknown error" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
