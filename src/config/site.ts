// ============================================
// SITE APPEARANCE CONFIGURATION
// Tweak these values to restyle the whole site.
// ============================================

export type FontPairId = 'inter-mono' | 'geist-mono' | 'manrope-jb' | 'serif-mono';
export type Density = 'compact' | 'regular' | 'comfy';
export type HeroLayout = 'split' | 'single';

export interface FontPair {
  sans: string;
  mono: string;
  display: string;
}

export const fontPairs: Record<FontPairId, FontPair> = {
  'inter-mono': { sans: 'Inter', mono: 'JetBrains Mono', display: 'Inter' },
  'geist-mono': { sans: 'Geist', mono: 'Geist Mono', display: 'Geist' },
  'manrope-jb': { sans: 'Manrope', mono: 'JetBrains Mono', display: 'Manrope' },
  'serif-mono': { sans: 'Inter', mono: 'JetBrains Mono', display: 'Instrument Serif' },
};

export const densityScale: Record<Density, number> = {
  compact: 0.7,
  regular: 1,
  comfy: 1.25,
};

export const siteConfig = {
  // Accent colour hue (0-360, OKLCH). 60 = warm amber "Java Brew".
  accentHue: 60,
  fontPair: 'inter-mono' as FontPairId,
  density: 'regular' as Density,
  heroLayout: 'split' as HeroLayout,
};
