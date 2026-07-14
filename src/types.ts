export interface Team {
  id: string;
  name: string;
  city: string;
  shortName: string;
  logoColor: string; // Dynamic CSS gradient/styling
  category: 'Men' | 'Women';
  founded: number;
  homeGround: string;
  coach: string;
}

export interface Match {
  id: string;
  teamAId: string;
  teamBId: string;
  teamAName: string;
  teamBName: string;
  teamALogoColor: string;
  teamBLogoColor: string;
  scoreA?: number;
  scoreB?: number;
  date: string;
  time: string;
  venue: string;
  status: 'LIVE' | 'COMPLETED' | 'UPCOMING';
  minute?: number; // For live match simulation
  category: 'Men' | 'Women';
}

export interface StandingsRow {
  teamId: string;
  teamName: string;
  shortName: string;
  logoColor: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  category: 'Men' | 'Women';
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export interface HighlightVideo {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string; // Mock or standard YouTube/Vimeo embed
  date: string;
  matchInfo: string;
}
