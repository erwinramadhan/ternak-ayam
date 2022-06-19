import {ReactNode} from 'react';
import {ColorValue, GestureResponderEvent} from 'react-native';

export type IButton = {
  children?: ReactNode;
  text: string;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  marginTop?: number;
  fontFamily?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};
