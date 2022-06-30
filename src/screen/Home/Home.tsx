import React, {FC} from 'react';
import dayjs from 'dayjs';
import withObservables from '@nozbe/with-observables';

import {useNavigation} from '@react-navigation/native';
import {observeTasks} from '../../model/helpers';

import Container from '../../components/Container/Container';
import {HomeTabScreenProps} from '../../navigation/types';
import Text from '../../components/Text/Text';
import Styles from './style';
import GetContext from '../../context/Context';
import {Image, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {female, male} from '../../assets/images';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import Card from '../../components/Card/Card';
import {setDeailTask} from '../../store/reducer/userSlice';
import Task from '../../model/Task';

const Context = GetContext();

const Home: FC<{task: Task[]}> = ({task}) => {
  const {theme} = Context.UseData();
  const {colors, fonts} = theme;
  const style = Styles(theme);

  const {gender, name, taskList} = useAppSelector(state => state);

  const dataAfterNoon = taskList.find(
    el => el.date === dayjs().format('YYYY-MM-DD'),
  )?.itemsAfternoon;

  const dataMorning = taskList.find(
    el => el.date === dayjs().format('YYYY-MM-DD'),
  )?.itemsMorning;

  const navigation = useNavigation<HomeTabScreenProps<'home'>['navigation']>();
  const dispatch = useAppDispatch();

  const onPress = (e: any) => {
    navigation.navigate('detailTask');
    dispatch(setDeailTask(e));
  };

  return (
    <Container containerStyle={style.container} scrollView={true}>
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
      <Text
        fontSize={14}
        color={colors.raisinBlack}
        fontFamily={fonts.bold}
        style={style.categoryText}
        marginTop={40}
        marginBottom={20}>
        Kategori
      </Text>
      <View style={style.categoryCardContainer}>
        <Card
          colors={colors}
          fonts={fonts}
          category="morning"
          type="category"
          onClick={onPress}
          taskData={dataMorning}
        />
        <Card
          colors={colors}
          fonts={fonts}
          category="afternoon"
          type="category"
          onClick={onPress}
          taskData={dataAfterNoon}
        />
      </View>
      <Text
        fontSize={14}
        color={colors.raisinBlack}
        fontFamily={fonts.bold}
        style={style.categoryText}
        marginTop={28}
        marginBottom={14}>
        Kegiatan yang berjalan
      </Text>
      <Card
        colors={colors}
        fonts={fonts}
        type="task"
        category="morning"
        taskData={dataMorning}
        onClick={onPress}
      />
      <Text
        fontSize={14}
        color={colors.raisinBlack}
        fontFamily={fonts.bold}
        style={style.categoryText}
        marginTop={28}
        marginBottom={14}>
        Kegiatan yang akan datang
      </Text>
      <Card
        colors={colors}
        fonts={fonts}
        type="task"
        category="afternoon"
        taskData={dataAfterNoon}
        onClick={onPress}
      />
    </Container>
  );
};

const enhanceWithTasks = withObservables([], () => ({
  task: observeTasks(),
}));

export default enhanceWithTasks(Home);
