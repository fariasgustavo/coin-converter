import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './style'

import {connect} from 'react-redux';

const InputComponent = ({ navigation,applyCurrency,baseCurrency,state }) => (
    <View>
        <View 
        style={styles.box_input}
        >
            <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate('CurrencySelection', { change: 'base' })}
            >
                <Text>{ baseCurrency }</Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                value={ '1' }
            />
        </View> 

        <View 
        style={styles.box_input}
        >
            <TouchableOpacity
                style={styles.touch}
                onPress={() => navigation.navigate('CurrencySelection',{ change: 'apply' })}
            >
                <Text>{ applyCurrency.name.toString() }</Text>
            </TouchableOpacity>
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                value={ applyCurrency.value.toString() }
            />
        </View> 
    </View>
);

export default connect(state => ({ applyCurrency: state.applyCurrency, baseCurrency: state.baseCurrency, state: state}))(InputComponent);