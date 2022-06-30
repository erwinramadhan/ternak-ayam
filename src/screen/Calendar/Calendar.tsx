/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Agenda,
  AgendaEntry,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';

import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import GetContext from '../../context/Context';
import {CalendarTabScreenProps} from '../../navigation/types';

LocaleConfig.locales.id = {
  monthNames: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'July',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sept',
    'Oct',
    'Nov',
    'Des',
  ],
  dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'],
  dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  today: 'Hari ini',
};

LocaleConfig.defaultLocale = 'id';
const Context = GetContext();

const now = dayjs().format('YYYY-MM-DD');

const Calendar = () => {
  const {theme} = Context.UseData();
  const navigation =
    useNavigation<CalendarTabScreenProps<'tabCalendar'>['navigation']>();
  const [selected, setSelected] = useState(now);
  const [items, setItems] = useState<{[date: string]: AgendaEntry[]}>({
    '2022-06-26': [
      {
        name: 'Kegiatan Pagi',
        day: 'Pukul 05:30 - 07:00',
        height: 100,
      },
      {
        name: 'Kegiatan Sore',
        day: 'Pukul 16:00 - 17:30',
        height: 100,
      },
    ],
    '2022-06-27': [
      {
        name: 'Kegiatan Pagi',
        day: 'Pukul 05:30 - 07:00',
        height: 100,
      },
      {
        name: 'Kegiatan Sore',
        day: 'Pukul 16:00 - 17:30',
        height: 100,
      },
    ],
  });

  const onDayPress = (date: DateData) => {
    setSelected(date.dateString);
  };

  const renderItem = (item: AgendaEntry) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detailTask')}
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: 10,
          padding: 12,
        }}>
        <Text color={theme.colors.raisinBlack} fontFamily={theme.fonts.regular}>
          {item.name}
        </Text>
        <Text
          color={theme.colors.bitterSweet}
          fontFamily={theme.fonts.semiBold}>
          {item.day}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyData = () => {
    return (
      <View>
        <Text>Belum ada kegiatan</Text>
      </View>
    );
  };

  return (
    <Container>
      <Agenda
        selected={selected}
        onDayPress={onDayPress}
        items={items}
        renderItem={renderItem}
        showOnlySelectedDayItems
        renderEmptyData={renderEmptyData}
      />
    </Container>
  );
};

export default Calendar;
