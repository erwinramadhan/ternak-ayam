/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Container/Container';
import {female, male, laptop, bike} from '../../assets/images';
import Text from '../../components/Text/Text';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import {useAppSelector} from '../../hooks/hooks';
import GetContext from '../../context/Context';

import Styles from './style';
import Icon from '../../assets/icons';
import Modal from '../../components/Modal/Modal';
const Context = GetContext();

const Reward = () => {
  const {theme} = Context.UseData();
  const {fonts, colors} = theme;

  const [modalOpen, setModalOpen] = useState(false);
  const {gender, name} = useAppSelector(state => state);

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const style = Styles(theme);
  return (
    <Container containerStyle={style.container}>
      <Modal open={modalOpen} onCloseModal={onCloseModal} />
      <View style={style.profileContainer}>
        <View>
          <Text
            fontSize={20}
            fontFamily={fonts.bold}
            color={colors.raisinBlack}>
            Hi {capitalizeFirstLetter(name)}
          </Text>
          <Text
            style={style.taskText}
            color={colors.bitterSweet}
            fontSize={14}
            fontFamily={fonts.semiBold}>
            Ada 20 kegiatan hari ini
          </Text>
        </View>
        <View style={style.iconUserContainer}>
          <Image source={gender === 'LAKI-LAKI' ? male : female} />
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
        <Icon.Star />
        <Text
          style={{marginLeft: 8}}
          fontFamily={fonts.semiBold}
          color={colors.raisinBlack}>
          1200 Point
        </Text>
      </View>
      <Text
        fontFamily={fonts.bold}
        color={colors.raisinBlack}
        style={{marginBottom: 8}}>
        Reward yang dapat dipilih
      </Text>
      <TouchableOpacity
        onPress={onOpenModal}
        style={{
          backgroundColor: colors.white,
          borderRadius: 12,
          alignItems: 'center',
          marginVertical: 8,
          padding: 8,
        }}>
        <Text fontFamily={fonts.semiBold} color={colors.raisinBlack}>
          Bermain laptop selama 2 jam
        </Text>
        <Image source={laptop} style={{marginVertical: 12}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon.Star />
          <Text
            color={colors.raisinBlack}
            fontFamily={fonts.semiBold}
            style={{marginLeft: 8}}>
            1.000 Point yang digunakan
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          borderRadius: 12,
          alignItems: 'center',
          marginVertical: 8,
          padding: 8,
        }}>
        <Text fontFamily={fonts.semiBold} color={colors.raisinBlack}>
          Bermain laptop selama 2 jam
        </Text>
        <Image source={bike} style={{marginVertical: 12}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon.Star />
          <Text
            color={colors.raisinBlack}
            fontFamily={fonts.semiBold}
            style={{marginLeft: 8}}>
            800 Point yang digunakan
          </Text>
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Reward;
