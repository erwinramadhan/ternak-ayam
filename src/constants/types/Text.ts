import {ReactNode} from 'react';
import {ColorValue, StyleProp, TextStyle} from 'react-native';

export type IText = {
  children: ReactNode;
  color?: ColorValue;
  fontFamily?: string;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
};
