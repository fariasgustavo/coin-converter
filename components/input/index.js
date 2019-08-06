import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './style';
import {connect} from 'react-redux';

const InputComponent = ({ navigation,initialCurrency,initialCurrencyIndex }) => (
    <View 
    style={styles.box_input}
    >
        <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('CurrencySelection')}
        >
            <Text>{ initialCurrency[initialCurrencyIndex] }</Text>
        </TouchableOpacity>
        <TextInput 
            style={styles.input}
            keyboardType='numeric'
        />
    </View> 
);

export default connect(state => ({ initialCurrency: state.initialCurrencies}))(InputComponent);