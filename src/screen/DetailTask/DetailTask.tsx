/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Bar} from 'react-native-progress';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';

import GetContext from '../../context/Context';
import Icon from '../../assets/icons';
import {updateTaskList} from '../../store/reducer/userSlice';
import dayjs from 'dayjs';

const Context = GetContext();

const DetailTask = () => {
  const dispatch = useAppDispatch();
  const {theme} = Context.UseData();
  const {detailTask} = useAppSelector(state => state);

  const [totalTask, setTotalTask] = useState(0);
  const [checkedTask, setCheckedTask] = useState(0);
  const [ctr, setCtr] = useState(0);
  const [percentageProgress, setPercentageProgress] = useState(0);

  useEffect(() => {
    if (checkedTask && totalTask) {
      setPercentageProgress(checkedTask / totalTask);
    }
  }, [checkedTask, totalTask, detailTask, ctr]);

  useEffect(() => {
    if (totalTask === 0) {
      let totalTasks = 0;
      let totalTaskChecked = 0;
      detailTask?.tasks.map(el => {
        totalTasks += el.items.map(e => e).length;
        totalTaskChecked += el.items.filter(e => e.isDone === true).length;
      });
      setTotalTask(totalTasks);
      setCheckedTask(totalTaskChecked);
    }
  }, [checkedTask, detailTask?.tasks, totalTask]);

  useEffect(() => {
    if (ctr) {
      let totalTasks = 0;
      let totalTaskChecked = 0;
      detailTask?.tasks.map(el => {
        totalTasks += el.items.map(e => e).length;
        totalTaskChecked += el.items.filter(e => e.isDone === true).length;
      });
      setTotalTask(totalTasks);
      setCheckedTask(totalTaskChecked);
      setPercentageProgress(totalTaskChecked / totalTasks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctr]);

  const onPressTask = (parentName: string, childName: string) => {
    setCtr(ctr + 1);
    dispatch(
      updateTaskList({
        date: dayjs().format('YYYY-MM-DD'),
        category: detailTask.category,
        parentName,
        childName,
      }),
    );
  };

  return (
    <Container containerStyle={{padding: 24}} scrollView>
      <Text
        fontFamily={theme.fonts.bold}
        color={theme.colors.raisinBlack}
        style={{marginBottom: 20}}>
        PUKUL {detailTask.timeStart} - {detailTask.timeEnd}
      </Text>
      <Text
        fontFamily={theme.fonts.bold}
        color={theme.colors.raisinBlack}
        style={{marginBottom: 12}}>
        {totalTask} kegiatan{' '}
        {detailTask.category === 'morning' ? 'pagi' : 'sore'} ini
      </Text>
      {detailTask.tasks.map((e, eIndex: number) => {
        return (
          <Fragment key={eIndex}>
            <Text
              fontFamily={theme.fonts.semiBold}
              color={theme.colors.raisinBlack}
              style={{marginVertical: 8}}>
              {e.name}
            </Text>
            {e.items.map((el, index: number) => (
              <View style={{paddingHorizontal: 0}} key={index}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: theme.colors.white,
                    borderRadius: 99,
                    marginVertical: 4,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                  }}
                  onPress={() => onPressTask(e.name, el.name)}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 0.1}}>
                      <View
                        style={{
                          backgroundColor: el.isDone
                            ? theme.colors.cyan
                            : theme.colors.metalicSilver,
                          borderRadius: 99,
                          padding: 4,
                          width: 22,
                          height: 22,
                        }}>
                        <Icon.Check
                          active={el.isDone}
                          activeColor={theme.colors.white}
                        />
                      </View>
                    </View>
                    <Text style={{flex: 0.8}} color={theme.colors.raisinBlack}>
                      {el.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </Fragment>
        );
      })}
      <View style={{padding: 24, alignItems: 'center'}}>
        <Text
          fontFamily={theme.fonts.semiBold}
          color={theme.colors.raisinBlack}
          marginBottom={8}>
          Progress Kegiatan
        </Text>
        <Bar
          progress={percentageProgress}
          style={{width: '100%'}}
          height={20}
        />
        <Text
          fontFamily={theme.fonts.semiBold}
          color={theme.colors.raisinBlack}>
          {percentageProgress * 100} %
        </Text>
        <Text
          fontFamily={theme.fonts.semiBold}
          color={theme.colors.raisinBlack}>
          {checkedTask} dari {totalTask} telah diselesaikan
        </Text>
      </View>
    </Container>
  );
};

export default DetailTask;
