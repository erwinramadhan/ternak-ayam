import React from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';
import {IText} from '../../constants/types/Text';

const Text = ({
  children,
  color,
  fontFamily,
  fontSize,
  style,
  marginTop,
  marginBottom,
  numberOfLines,
}: IText) => {
  const Style = Styles(color, fontFamily, fontSize, marginTop, marginBottom);
  return (
    <NativeText
      style={StyleSheet.flatten([Style.nativeText, style])}
      numberOfLines={numberOfLines}>
      {children}
    </NativeText>
  );
};

const Styles = (
  color: IText['color'],
  fontFamily: IText['fontFamily'],
  fontSize: IText['fontSize'],
  marginTop: IText['marginTop'],
  marginBottom: IText['marginBottom'],
) =>
  StyleSheet.create({
    nativeText: {
      color,
      fontFamily,
      fontSize,
      marginTop,
      marginBottom,
    },
  });

export default Text;
