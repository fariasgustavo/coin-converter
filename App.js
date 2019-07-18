import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './screens/Main';
import CurrencySelection from './screens/CurrencySelection';

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

const App = () => <AppContainer />;

export default App;