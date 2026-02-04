export const lightColors = {
  primary: '#3B82F6',

  background: '#FFFFFF',
  surface: '#F5F5F5',

  foreground: '#000000',
  muted: '#4B5563',

  border: '#E5E7EB',

  overlay: '#000000',
  error: '#DC2626',
  buy: '#22C55E',
  sell: '#FF5252',
  selectionBorder: '#4C1D95',
  selectionBackground: '#F3E8FF',
};

export const darkColors = {
  primary: '#3B82F6',

  background: '#0B0B0B',
  surface: '#1A1A1A',

  foreground: '#FFFFFF',
  muted: '#9CA3AF',

  border: '#2A2A2A',

  overlay: '#000000',
  error: '#DC2626',
  buy: '#22C55E',
  sell: '#FF5252',
  selectionBorder: '#4C1D95',
  selectionBackground: '#F3E8FF',
};

export const theme = {
  colors: lightColors, // later: switch based on color scheme
};

export type ColorKey = keyof typeof theme.colors;
