import React from 'react';
import { View } from 'react-native';

import ImageComponent from './components/image/index';
import TitleComponent from './components/title/index';
import InputComponent from './components/input/index';
import DetailsComponent from './components/details/index';
import ChangeCoinsComponent from './components/change-coins/index';

import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageComponent></ImageComponent>
      <TitleComponent></TitleComponent>
      <InputComponent></InputComponent>
      <DetailsComponent></DetailsComponent>
      <ChangeCoinsComponent></ChangeCoinsComponent> 
    </View>
  );
}
