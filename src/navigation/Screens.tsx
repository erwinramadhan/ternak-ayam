import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screen/Home/Home';
import Reward from '../screen/Reward/Reward';
import Calendar from '../screen/Calendar/Calendar';
import Login from '../screen/Login/Login';
import {useAppSelector} from '../hooks/hooks';
import Icon from '../assets/icons';
import GetContext from '../context/Context';
import DetailTask from '../screen/DetailTask/DetailTask';

const NativeStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Context = GetContext();

const Tabs = () => {
  const {theme} = Context.UseData();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.bitterSweet.toString(),
        tabBarInactiveTintColor: theme.colors.metalicSilver.toString(),
      }}>
      <Tab.Screen
        name="Beranda"
        children={TabHomes}
        options={{
          tabBarIcon: props => {
            return <Icon.Home color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{
          tabBarIcon: props => {
            return <Icon.Reward color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Kalendar"
        component={Calendar}
        options={{
          tabBarIcon: props => {
            return <Icon.Calendar color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const TabHomes = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="home" component={Home} />
    </HomeStack.Navigator>
  );
};

const Screen = () => {
  const {gender, name} = useAppSelector(state => state);
  const isLoggedIn = gender !== '' && name !== '';
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <NativeStack.Group>
          <NativeStack.Screen name="login" component={Login} />
        </NativeStack.Group>
      ) : (
        <NativeStack.Group>
          <NativeStack.Screen name="main" component={Tabs} />
          <NativeStack.Screen
            name="detailTask"
            component={DetailTask}
            options={{headerShown: true, title: 'Detail Kegiatan'}}
          />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export default Screen;
