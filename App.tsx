import React from 'react';
import GetContext from './src/context/Context';

import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from './src/context/Theme';

const App = () => {
  const Context = GetContext();
  return (
    <Context.DataProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </Context.DataProvider>
  );
};

export default App;
