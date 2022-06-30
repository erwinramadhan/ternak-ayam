import React from 'react';
import {Provider} from 'react-redux';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import {PersistGate} from 'redux-persist/integration/react';

import GetContext from './src/context/Context';
import store, {persistor} from './src/store/store';
import AppNavigation from './src/navigation/AppNavigation';
import {ThemeProvider} from './src/context/Theme';
import {database} from './src/model/database';

const App = () => {
  const Context = GetContext();
  return (
    <DatabaseProvider database={database}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Context.DataProvider>
            <ThemeProvider>
              <AppNavigation />
            </ThemeProvider>
          </Context.DataProvider>
        </PersistGate>
      </Provider>
    </DatabaseProvider>
  );
};

export default App;
