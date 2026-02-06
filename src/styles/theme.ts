export const lightColors = {
  /* ===== TEXT ===== */
  bodyDark: '#FFFFFF',
  selectedText: '#330133',
  loss: '#CC3F29',
  profit: '#0E9024',
  onBackground: '#292226',
  bodyLight: '#292226',
  textTabSelected: '#292226',
  textTabActive: '#333232',
  radioSelected: '#292226',
  radioUnselected: '#333232',
  textSecondary: '#66525C',

  /* ===== LABEL ===== */
  onBuy: '#033803',
  sellCTA: '#CC3F29',
  sell: '#4D1E17',
  active: '#333232',
  focussed: '#292226',
  disabledLabel: '#B2AEB0',
  labelSecondary: '#737071',
  event: '#008DFF',
  openOrder: '#C56800',

  /* ===== BACKGROUND ===== */
  sellButton: '#FC644C',
  buyButton: '#51D467',
  neutralButtonDark: '#352F32',
  neutralButtonLight: '#FAF5FA',
  successVariant: '#0E9024',
  backgroundDefault: '#FCFCFC',
  backgroundLight: '#FAFAFA',
  backgroundDisabled: '#E5E3E5',
  backgroundSelected: '#FFF2FF',
  otm: '#FCFCFC',
  itm: '#FEFBF1',

  /* ===== OUTLINE ===== */
  outlineDefault: '#E0DCE0',
  outlineVariant: '#DDDDDD',
  outlineSelected: '#330133',

  /* ===== SCHEMES ===== */
  primary: '#E516E5',
  onPrimaryContainer: '#970097',
  secondary: '#645A70',
  onSecondary: '#FFFFFF',

  /* ===== ORDERS ===== */
  orderOpen: '#CC8800',
};

export const darkColors = {
  ...lightColors, // for now same as light
};

export const theme = {
  colors: lightColors, // later: switch based on color scheme
};

export type ColorKey = keyof typeof theme.colors;
