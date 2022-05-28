import React from 'react';
import {ColorValue} from 'react-native';

export interface ITheme {
  colors: ThemeColors;
}

export interface IThemeProvider {
  theme?: ITheme;
  children?: React.ReactNode;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
}
