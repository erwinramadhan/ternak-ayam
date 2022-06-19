import {StyleSheet} from 'react-native';
import {ITheme} from '../../constants';

const Styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.text,
    },
  });

export default Styles;
