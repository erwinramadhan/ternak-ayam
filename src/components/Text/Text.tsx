import React from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
import {IText} from '../../constants/types/Text';

const Text = ({children, color, fontFamily, fontSize, style}: IText) => {
  const Style = Styles(color, fontFamily, fontSize);
  return (
    <NativeText style={StyleSheet.flatten([style, Style.nativeText])}>
      {children}
    </NativeText>
  );
};

const Styles = (
  color: IText['color'],
  fontFamily: IText['fontFamily'],
  fontSize: IText['fontSize'],
) =>
  StyleSheet.create({
    nativeText: {
      color,
      fontFamily,
      fontSize,
    },
  });

export default Text;
