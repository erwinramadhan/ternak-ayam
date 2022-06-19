import {ColorValue} from 'react-native';

export type ITextInput = {
  title: string;
  textInputProps: {
    testID: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
  };
  color?: ColorValue;
};
