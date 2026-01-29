export const lightColors = {
  primary: '#3B82F6',
  background: '#FFFFFF',
  surface: '#F5F5F5',
  textPrimary: '#000000',
  textSecondary: '#4B5563',
  border: '#E5E7EB',
};

export const darkColors = {
  primary: '#3B82F6',
  background: '#0B0B0B',
  surface: '#1A1A1A',
  textPrimary: '#FFFFFF',
  textSecondary: '#9CA3AF',
  border: '#2A2A2A',
};

export const theme = {
  colors: lightColors,
};

export type ColorKey = keyof typeof theme.colors;
