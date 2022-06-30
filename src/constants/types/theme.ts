import React from 'react';
import {ColorValue} from 'react-native';

export interface ITheme {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface IThemeProvider {
  theme?: ITheme;
  children?: React.ReactNode;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
  white: ColorValue;
  bitterSweet: ColorValue;
  raisinBlack: ColorValue;
  ghostWhite: ColorValue;
  metalicSilver: ColorValue;
  lightSkyBlue: ColorValue;
  pistachio: ColorValue;
  cyan: ColorValue;
}

export interface ThemeFonts {
  black: string;
  bold: string;
  extraBold: string;
  extraLight: string;
  light: string;
  medium: string;
  regular: string;
  semiBold: string;
  thin: string;
}
