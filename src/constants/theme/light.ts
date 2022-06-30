import {ITheme, ThemeColors, ThemeFonts} from '../types/theme';

export const COLORS: ThemeColors = {
  text: '#000000',
  white: '#FFFFFF',
  bitterSweet: '#FF7562',
  raisinBlack: '#2A2120',
  ghostWhite: '#F6FAFB',
  metalicSilver: '#A7A6AB',
  lightSkyBlue: '#8AC2FF',
  pistachio: '#97DA7B',
  cyan: '#198BCE',
};

export const FONTS: ThemeFonts = {
  black: 'Inter-Black',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
  extraLight: 'Inter-ExtraLight',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
  thin: 'Inter-Thin',
};

export const light: ITheme = {
  colors: COLORS,
  fonts: FONTS,
};
