import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screen/Home/Home';
import Reward from '../screen/Reward/Reward';
import Calendar from '../screen/Calendar/Calendar';
import Login from '../screen/Login/Login';
import {useAppSelector} from '../hooks/hooks';

const NativeStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="tabHome" children={TabHomes} />
      <Tab.Screen
        name="tabReward"
        component={Reward}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="tabCalendar"
        component={Calendar}
        options={{headerShown: false}}
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
  const {user} = useAppSelector(state => state);
  const isLoggedIn = user.gender !== '' && user.name !== '';
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      {!isLoggedIn ? (
        <NativeStack.Group>
          <NativeStack.Screen name="login" component={Login} />
        </NativeStack.Group>
      ) : (
        <NativeStack.Group>
          <NativeStack.Screen name="main" component={Tabs} />
        </NativeStack.Group>
      )}
    </NativeStack.Navigator>
  );
};

export default Screen;
