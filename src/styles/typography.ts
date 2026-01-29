import { fontPixel } from './scale';

export const fontSizes: Record<string, { fontSize: number; lineHeight: number }> = {
  'text-xs': { fontSize: fontPixel(12), lineHeight: fontPixel(16) },
  'text-sm': { fontSize: fontPixel(14), lineHeight: fontPixel(20) },
  'text-base': { fontSize: fontPixel(16), lineHeight: fontPixel(24) },
  'text-lg': { fontSize: fontPixel(18), lineHeight: fontPixel(26) },
  'text-xl': { fontSize: fontPixel(20), lineHeight: fontPixel(28) },
  'text-2xl': { fontSize: fontPixel(24), lineHeight: fontPixel(32) },
  'text-3xl': { fontSize: fontPixel(28), lineHeight: fontPixel(36) },
};

export const fontWeights: Record<string, number> = {
  'font-regular': 400,
  'font-medium': 500,
  'font-semibold': 600,
  'font-bold': 700,
};
