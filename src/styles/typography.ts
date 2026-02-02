import { fontPixel } from './scale';

export const fontFamily = {
  regular: 'IBMPlexSans-Regular',
  medium: 'IBMPlexSans-Medium',
  semibold: 'IBMPlexSans-SemiBold',
  bold: 'IBMPlexSans-Bold',
} as const;

export const fontSizes = {
  'text-xs': { fontSize: fontPixel(12), lineHeight: fontPixel(16) },
  'text-sm': { fontSize: fontPixel(14), lineHeight: fontPixel(20) },
  'text-base': { fontSize: fontPixel(16), lineHeight: fontPixel(24) },
  'text-lg': { fontSize: fontPixel(18), lineHeight: fontPixel(26) },
  'text-xl': { fontSize: fontPixel(20), lineHeight: fontPixel(28) },
  'text-2xl': { fontSize: fontPixel(24), lineHeight: fontPixel(32) },
  'text-3xl': { fontSize: fontPixel(28), lineHeight: fontPixel(36) },
} as const;

/* ---------- Types (derived) ---------- */

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export type TextWeight = keyof typeof fontFamily;
