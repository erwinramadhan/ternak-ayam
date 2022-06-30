import {ColorValue} from 'react-native';

export type IIcon = {
  check: {
    active: boolean;
    activeColor?: string | ColorValue;
  };
  tab: {
    color: string;
  };
};
