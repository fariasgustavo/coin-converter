import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import CurrencySelection from './screens/CurrencySelection';

import store from './store';

const AppNavigator = createStackNavigator(
  {
    Main,
    CurrencySelection,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => 
  <Provider store={store}>
    <AppContainer />;
  </Provider>

export default App;