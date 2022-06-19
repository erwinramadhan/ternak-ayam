import React, {useContext, useState} from 'react';
// import {getBundleId} from 'react-native-device-info';

import {ITheme, IUseData, light} from '../constants';

const DataContext = React.createContext({});
const DataProvider = ({children}: {children: React.ReactNode}) => {
  // const bundleId = getBundleId();
  const DEFAULT_APP = 'sekitarcustomerapp';

  const [theme, setTheme] = useState<ITheme>(light);

  const contextValue = {
    theme,
    appName: DEFAULT_APP,
    setTheme,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

const UseData = () => useContext(DataContext) as IUseData;

const GetContext = () => {
  return {
    DataContext,
    DataProvider,
    UseData,
  };
};

export default GetContext;
