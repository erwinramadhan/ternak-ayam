import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {afternoon, morning} from '../../../assets/images';
import {ITheme} from '../../../constants';
import {ICardCategory} from '../../../constants/types/Card';
import Text from '../../Text/Text';

const CardCategory = ({
  fonts,
  colors,
  category,
  onClick,
  data,
}: ICardCategory) => {
  const [widthCard, setWidthCard] = useState(0);
  const style = Styles(colors, widthCard);
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onLayout={e => {
        setWidthCard(e.nativeEvent.layout.width);
      }}
      onPress={() => onClick(data)}>
      <View style={style.textCardContainer}>
        <Text color={colors.raisinBlack} fontFamily={fonts.bold} fontSize={14}>
          {category === 'morning' ? 'Pagi' : 'Sore'}
        </Text>
        <Text
          color={colors.raisinBlack}
          fontFamily={fonts.semiBold}
          fontSize={12}
          marginTop={4}>
          10 Kegiatan
        </Text>
      </View>
      <Image
        source={category === 'morning' ? morning : afternoon}
        style={style.imageCard}
      />
    </TouchableOpacity>
  );
};

export default CardCategory;

const Styles = (colors: ITheme['colors'], widthCard: number) =>
  StyleSheet.create({
    cardContainer: {
      borderRadius: 10,
      paddingTop: 12,
      flex: 0.45,
      backgroundColor: colors.white,
    },
    textCardContainer: {
      paddingHorizontal: 12,
    },
    imageCard: {
      marginTop: 8,
      resizeMode: 'contain',
      width: widthCard,
      height: widthCard,
    },
  });
