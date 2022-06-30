import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
dayjs.extend(isBetween);
dayjs.extend(utc);
import React, {Fragment, useEffect, useState, useLayoutEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Circle} from 'react-native-progress';

import Icon from '../../../assets/icons';
import {ICardTask} from '../../../constants/types/Card';
import {useAppSelector, useCountdown} from '../../../hooks/hooks';
import Text from '../../Text/Text';

const CardTask = ({fonts, colors, category, onClick}: ICardTask) => {
  const [totalTask, setTotalTask] = useState(0);
  const [checkedTask, setCheckedTask] = useState(0);
  const [percentageProgress, setPercentageProgress] = useState(0);

  const style = Styles(fonts, colors);
  const {taskList} = useAppSelector(state => state);

  const dataToday = taskList.find(
    el => el.date === dayjs().format('YYYY-MM-DD'),
  );

  const data =
    category === 'morning'
      ? dataToday?.itemsMorning
      : dataToday?.itemsAfternoon;

  useEffect(() => {
    if (totalTask === 0) {
      let totalTasks = 0;
      let totalTaskChecked = 0;
      data?.tasks.map(el => {
        totalTasks += el.items.map(e => e).length;
        totalTaskChecked += el.items.filter(e => e.isDone === true).length;
      });
      setTotalTask(totalTasks);
      setCheckedTask(totalTaskChecked);
    }
  }, [checkedTask, data?.tasks, totalTask]);

  useLayoutEffect(() => {
    let totalTasks = 0;
    let totalTaskChecked = 0;
    data?.tasks.map(el => {
      totalTasks += el.items.map(e => e).length;
      totalTaskChecked += el.items.filter(e => e.isDone === true).length;
    });
    setTotalTask(totalTasks);
    setCheckedTask(totalTaskChecked);
  }, [data?.tasks]);

  useEffect(() => {
    if (checkedTask && totalTask) {
      setPercentageProgress(checkedTask / totalTask);
    }
  }, [checkedTask, totalTask]);

  const todayDate = dayjs().utc(true).format('YYYY-MM-DD');
  const isBetweenAfternoon = dayjs()
    .utc(true)
    .isBetween(
      dayjs(`${todayDate} 16:00`).utc(true),
      dayjs(`${todayDate} 17:30`).utc(true),
      'seconds',
    );
  const isBetweenMorning = dayjs()
    .utc(true)
    .isBetween(
      dayjs(`${todayDate} 05:30`).utc(true),
      dayjs(`${todayDate} 07:00`).utc(true),
      'seconds',
    );

  const [seconds, minutes, hours] = useCountdown(90, 0);

  const timer = `${hours.length === 1 ? '0' + hours : hours}:${
    minutes.length === 1 ? '0' + minutes : minutes
  }:${seconds.length === 1 ? '0' + seconds : seconds}`;

  return (
    <TouchableOpacity style={style.container} onPress={() => onClick(data)}>
      <View style={style.titleContainer}>
        <Text
          fontSize={14}
          fontFamily={fonts.bold}
          color={colors.raisinBlack}
          style={style.titleContainer}>
          Kegiatanku di {category === 'morning' ? 'Pagi' : 'Sore'} hari
        </Text>
        <Text style={style.timerText}>{timer}</Text>
      </View>
      {data &&
        data.tasks.length > 0 &&
        data.tasks.map((task, indexTask) => (
          <Fragment key={indexTask}>
            <Text
              fontSize={12}
              fontFamily={fonts.semiBold}
              marginTop={4}
              color={colors.metalicSilver}>
              {task.name}
            </Text>
            {task.items.map((item, indexItem) => {
              return (
                <View style={style.containerTaskItem} key={indexItem}>
                  <View style={style.iconContainer}>
                    <Icon.Check active={item.isDone} />
                  </View>
                  <Text
                    fontSize={12}
                    color={colors.raisinBlack}
                    numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
              );
            })}
          </Fragment>
        ))}
      <View style={style.timeContainer}>
        <View style={style.iconTimeContainer}>
          <Icon.TimeFill />
        </View>
        <Text
          fontFamily={fonts.semiBold}
          color={colors.metalicSilver}
          fontSize={12}>
          PUKUL {data?.timeStart} - {data?.timeEnd}
        </Text>
      </View>
      <Circle
        style={style.circleProgress}
        size={70}
        progress={percentageProgress}
        thickness={4}
        showsText
        formatText={e => e * 100 + '%'}
        textStyle={style.textProgress}
        borderColor={colors.metalicSilver.toString()}
        borderWidth={percentageProgress ? 1 : 4}
        color={
          percentageProgress !== 0
            ? colors.pistachio.toString()
            : colors.metalicSilver.toString()
        }
      />
    </TouchableOpacity>
  );
};

export default CardTask;

const Styles = (fonts: ICardTask['fonts'], colors: ICardTask['colors']) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: colors.white,
      borderRadius: 10,
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {
      flex: 0.6,
    },
    timerText: {
      backgroundColor: colors.lightSkyBlue,
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 10,
      fontSize: 10,
      fontFamily: fonts.bold,
      color: colors.white,
    },
    containerTaskItem: {
      width: '68%',
      flexDirection: 'row',
      marginTop: 4,
      alignItems: 'center',
    },
    iconContainer: {
      padding: 4,
      paddingRight: 8,
    },
    timeContainer: {
      flexDirection: 'row',
      marginTop: 16,
      alignItems: 'center',
    },
    iconTimeContainer: {
      marginRight: 12,
    },
    textProgress: {
      fontFamily: fonts.bold,
    },
    circleProgress: {
      position: 'absolute',
      bottom: 18,
      right: 18,
    },
  });
