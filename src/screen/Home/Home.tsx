import React from 'react';

import {useNavigation} from '@react-navigation/native';

import Container from '../../components/Container/Container';
import {HomeTabScreenProps} from '../../navigation/types';
import Text from '../../components/Text/Text';
import Styles from './style';
import GetContext from '../../context/Context';

const Context = GetContext();

const Home = () => {
  const {theme} = Context.UseData();
  const style = Styles(theme);
  const navigation = useNavigation<HomeTabScreenProps<'home'>['navigation']>();
  return (
    <Container containerStyle={style.container}>
      <Text>TEST</Text>
    </Container>
  );
};

export default Home;
