import { useEffect, useRef, useState } from 'react';

export function useJerseyTexture() {
  const frontCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const backCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const sideCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // States for uploaded/loaded design images
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);

  // Track if files were auto-loaded from workspace static assets
  const [isFrontAutoLoaded, setIsFrontAutoLoaded] = useState(false);
  const [isBackAutoLoaded, setIsBackAutoLoaded] = useState(false);
  const [isSideAutoLoaded, setIsSideAutoLoaded] = useState(false);

  const [version, setVersion] = useState(0); // Trigger texture updates in Three.js

  // Create canvas elements once
  if (!frontCanvasRef.current) {
    frontCanvasRef.current = document.createElement('canvas');
    frontCanvasRef.current.width = 1024;
    frontCanvasRef.current.height = 1024;
  }
  if (!backCanvasRef.current) {
    backCanvasRef.current = document.createElement('canvas');
    backCanvasRef.current.width = 1024;
    backCanvasRef.current.height = 1024;
  }
  if (!sideCanvasRef.current) {
    sideCanvasRef.current = document.createElement('canvas');
    sideCanvasRef.current.width = 512;
    sideCanvasRef.current.height = 1024;
  }

  // Auto-detect static assets in the public directory on mount
  useEffect(() => {
    const checkAndLoadAsset = (
      paths: string[],
      setImg: (val: string | null) => void,
      setAutoLoaded: (val: boolean) => void
    ) => {
      let resolved = false;
      const tryNext = (index: number) => {
        if (index >= paths.length || resolved) return;
        const path = paths[index];
        const img = new Image();
        img.onload = () => {
          setImg(path);
          setAutoLoaded(true);
          resolved = true;
        };
        img.onerror = () => {
          tryNext(index + 1);
        };
        img.src = path;
      };
      tryNext(0);
    };

    // Check for common image extensions in public folder
    checkAndLoadAsset(['/front.png', '/front.jpg', '/front.jpeg'], setFrontImage, setIsFrontAutoLoaded);
    checkAndLoadAsset(['/back.png', '/back.jpg', '/back.jpeg'], setBackImage, setIsBackAutoLoaded);
    checkAndLoadAsset(['/side.png', '/side.jpg', '/side.jpeg', '/sleeves.png', '/sleeves.jpg'], setSideImage, setIsSideAutoLoaded);
  }, []);

  // Redraw canvases when image states change
  useEffect(() => {
    const frontCanvas = frontCanvasRef.current;
    const backCanvas = backCanvasRef.current;
    const sideCanvas = sideCanvasRef.current;
    if (!frontCanvas || !backCanvas || !sideCanvas) return;

    const ctxF = frontCanvas.getContext('2d');
    const ctxB = backCanvas.getContext('2d');
    const ctxS = sideCanvas.getContext('2d');
    if (!ctxF || !ctxB || !ctxS) return;

    // Helper to load an image element and draw it centered, maintaining aspect ratio
    const drawImageWithAspect = (
      ctx: CanvasRenderingContext2D,
      imgSrc: string,
      canvasW: number,
      canvasH: number,
      onComplete: () => void
    ) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.clearRect(0, 0, canvasW, canvasH);
        
        // Solid backing color
        ctx.fillStyle = '#0a0d1a';
        ctx.fillRect(0, 0, canvasW, canvasH);

        const imgW = img.width;
        const imgH = img.height;
        const imgRatio = imgW / imgH;
        const canvasRatio = canvasW / canvasH;

        let drawW = canvasW;
        let drawH = canvasH;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          // Image is wider than canvas - letterbox height
          drawH = canvasW / imgRatio;
          offsetY = (canvasH - drawH) / 2;
        } else {
          // Image is taller than canvas - pillarbox width
          drawW = canvasH * imgRatio;
          offsetX = (canvasW - drawW) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
        onComplete();
      };
      img.onerror = () => {
        onComplete();
      };
      img.src = imgSrc;
    };

    // Draw fallback procedural default jersey design
    const drawDefaultDesign = (
      ctx: CanvasRenderingContext2D,
      type: 'front' | 'back' | 'side'
    ) => {
      const canvasW = type === 'side' ? 512 : 1024;
      const canvasH = 1024;
      ctx.clearRect(0, 0, canvasW, canvasH);

      // 1. Premium dark royal blue base
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(0, 0, canvasW, canvasH);

      // 2. Linear gradient pattern overlays
      const grad = ctx.createLinearGradient(0, 0, 0, canvasH);
      grad.addColorStop(0, '#1d4ed8');
      grad.addColorStop(0.6, '#1e3a8a');
      grad.addColorStop(1, '#0f172a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvasW, canvasH);

      // 3. Dynamic sports stripes & accents (Gold and white chevron lines)
      ctx.strokeStyle = '#eab308'; // saffron gold
      ctx.lineWidth = 12;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (type === 'front') {
        // Draw athletic chest V stripes
        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.lineTo(512, 450);
        ctx.lineTo(924, 250);
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(150, 220);
        ctx.lineTo(512, 400);
        ctx.lineTo(874, 220);
        ctx.stroke();

        // Elegant Crest Emblem
        ctx.save();
        const crestX = 720;
        const crestY = 320;
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.moveTo(crestX, crestY - 35);
        ctx.lineTo(crestX + 30, crestY - 35);
        ctx.quadraticCurveTo(crestX + 30, crestY + 10, crestX, crestY + 40);
        ctx.quadraticCurveTo(crestX - 30, crestY + 10, crestX - 30, crestY - 35);
        ctx.closePath();
        ctx.fill();

        // Inner white crest star
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('★', crestX, crestY + 2);
        ctx.restore();

        // Brand Crest (Right Chest)
        ctx.save();
        const brandX = 304;
        const brandY = 320;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(brandX - 20, brandY + 15);
        ctx.lineTo(brandX, brandY - 20);
        ctx.lineTo(brandX + 20, brandY + 15);
        ctx.stroke();
        ctx.restore();

        // Sponsor / Team Title (Bold Varsity style)
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#020617';
        ctx.lineWidth = 8;
        ctx.lineJoin = 'round';
        ctx.font = 'black italic 82px Impact, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('HIL PRO', 512, 530);
        ctx.fillText('HIL PRO', 512, 530);
        ctx.restore();

        // Chest Number
        ctx.save();
        ctx.fillStyle = '#eab308';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 14;
        ctx.font = '900 150px "Oswald", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('07', 512, 710);
        ctx.fillText('07', 512, 710);
        ctx.restore();

      } else if (type === 'back') {
        // Upper back sash
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.4)';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(0, 180);
        ctx.lineTo(1024, 180);
        ctx.stroke();

        // Player Name Arc
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 8;
        ctx.font = 'bold 56px "Oswald", sans-serif';
        ctx.textAlign = 'center';
        const nameText = 'SINGH';
        const centerX = 512;
        const centerY = 330;
        const radius = 420;
        const angleStep = 0.055;
        
        ctx.translate(centerX, centerY);
        const totalAngle = (nameText.length - 1) * angleStep;
        ctx.rotate(-totalAngle / 2);

        for (let i = 0; i < nameText.length; i++) {
          ctx.save();
          ctx.translate(0, -radius);
          ctx.strokeText(nameText[i], 0, 0);
          ctx.fillText(nameText[i], 0, 0);
          ctx.restore();
          ctx.rotate(angleStep);
        }
        ctx.restore();

        // Large Number
        ctx.save();
        ctx.fillStyle = '#eab308';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 24;
        ctx.font = '900 340px "Oswald", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText('07', 512, 570);
        ctx.fillText('07', 512, 570);
        ctx.restore();

      } else if (type === 'side') {
        // Draw sleeve gold racing stripes
        ctx.fillStyle = '#eab308';
        ctx.fillRect(180, 0, 40, 1024);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(240, 0, 15, 1024);
      }
    };

    // Render Front panel
    if (frontImage) {
      drawImageWithAspect(ctxF, frontImage, 1024, 1024, () => setVersion((v) => v + 1));
    } else {
      drawDefaultDesign(ctxF, 'front');
      setVersion((v) => v + 1);
    }

    // Render Back panel
    if (backImage) {
      drawImageWithAspect(ctxB, backImage, 1024, 1024, () => setVersion((v) => v + 1));
    } else {
      drawDefaultDesign(ctxB, 'back');
      setVersion((v) => v + 1);
    }

    // Render Side details / Sleeves panel
    if (sideImage) {
      drawImageWithAspect(ctxS, sideImage, 512, 1024, () => setVersion((v) => v + 1));
    } else {
      drawDefaultDesign(ctxS, 'side');
      setVersion((v) => v + 1);
    }

  }, [frontImage, backImage, sideImage]);

  return {
    frontCanvas: frontCanvasRef.current,
    backCanvas: backCanvasRef.current,
    sideCanvas: sideCanvasRef.current,
    version,
    frontImage,
    backImage,
    sideImage,
    setFrontImage,
    setBackImage,
    setSideImage,
    isFrontAutoLoaded,
    isBackAutoLoaded,
    isSideAutoLoaded,
  };
}
