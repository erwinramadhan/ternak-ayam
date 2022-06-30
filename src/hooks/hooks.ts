import {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../store/store';

// Redux Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCountdown = (additionalMinute: number, ctr: number) => {
  const [countDownDate, setCountDownDate] = useState(
    addMinutes(additionalMinute).getTime(),
  );
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );
  useEffect(() => {
    if (ctr !== 0) {
      setCountDownDate(addMinutes(additionalMinute).getTime());
    }
  }, [additionalMinute, ctr]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
      if (countDown < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown, countDownDate]);
  return getReturnValues(countDown);
};

const addMinutes = (numOfMinutes: number, date = new Date()) => {
  date.setMinutes(date.getMinutes() + numOfMinutes);
  return date;
};
const getReturnValues = (countDown: number) => {
  let days = '00';
  let hours = '00';
  let minutes = '00';
  let seconds = '00';
  if (countDown < 0) {
    days = '00';
    hours = '00';
    minutes = '00';
    seconds = '00';
  } else {
    days = Math.floor(countDown / (1000 * 60 * 60 * 24)).toString();
    hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    ).toString();
    minutes = Math.floor(
      (countDown % (1000 * 60 * 60)) / (1000 * 60),
    ).toString();
    seconds = Math.floor((countDown % (1000 * 60)) / 1000).toString();
  }
  return [seconds, minutes, hours, days];
};
