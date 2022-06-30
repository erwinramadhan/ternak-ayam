import {ReactNode} from 'react';
import {ColorValue, StatusBarStyle, StyleProp, ViewStyle} from 'react-native';

export type IContainer = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  hideStatusBar?: boolean;
  barStyle?: StatusBarStyle;
  translucent?: boolean;
  barBackgroundColor?: ColorValue;
  backgroundColorContainer?: ColorValue;
  scrollView?: boolean;
};
