import React, {useRef} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {
  DefaultTheme,
  ParamListBase,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import GetContext from '../context/Context';
import Screens from './Screens';

const Context = GetContext();

const navigationRef = React.createRef<NavigationContainerRef<ParamListBase>>();

const navigate = (name: any, params: any) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
};

const AppNavigation = () => {
  const routeNameRef = useRef<string>();
  const isReadyRef = useRef<boolean>(false);
  const {theme} = Context.UseData();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
    },
  };

  const onReady = () => {
    isReadyRef.current = true;
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={{flex: 1}}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        theme={navigationTheme}>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
