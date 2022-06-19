import React from 'react';
import {Provider} from 'react-redux';

import GetContext from './src/context/Context';
import store from './src/store/store';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from './src/context/Theme';

const App = () => {
  const Context = GetContext();
  return (
    <Provider store={store}>
      <Context.DataProvider>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </Context.DataProvider>
    </Provider>
  );
};

export default App;
