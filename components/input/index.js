import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './style'

const InputComponent = ({ navigation,initialCurrency }) => (
    <View 
    style={styles.box_input}
    >
        <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('CurrencySelection')}
        >
            <Text>{ initialCurrency }</Text>
        </TouchableOpacity>
        <TextInput 
            style={styles.input}
            keyboardType='numeric'
        />
    </View> 
);

export default InputComponent;