export const lightColors = {
  primary: '#3B82F6',

  background: '#FFFFFF',
  surface: '#F5F5F5',

  foreground: '#000000',
  muted: '#4B5563',

  border: '#E5E7EB',

  error: '#DC2626',
};

export const darkColors = {
  primary: '#3B82F6',

  background: '#0B0B0B',
  surface: '#1A1A1A',

  foreground: '#FFFFFF',
  muted: '#9CA3AF',

  border: '#2A2A2A',
  error: '#DC2626',
};

export const theme = {
  colors: lightColors, // later: switch based on color scheme
};

export type ColorKey = keyof typeof theme.colors;
