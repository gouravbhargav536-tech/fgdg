export type PatternStyle = 'solid' | 'stripes' | 'hoops' | 'sash' | 'gradient' | 'half';

export interface JerseyConfig {
  mainColor: string;
  sleeveColor: string;
  collarColor: string;
  sidePatternColor: string;
  pattern: PatternStyle;
  teamName: string;
  playerName: string;
  jerseyNumber: string;
  logoUrl: string | null; // Data URL or external URL for custom logo
  fontColor: string;
  fontFamily: string;
  fontStyleId: string;
}

export interface FontStyle {
  id: string;
  name: string;
  family: string;
}

export interface PresetDesign {
  id: string;
  name: string;
  mainColor: string;
  sleeveColor: string;
  collarColor: string;
  sidePatternColor: string;
  pattern: PatternStyle;
  fontColor: string;
  fontStyleId: string;
  badgeUrl?: string;
}
