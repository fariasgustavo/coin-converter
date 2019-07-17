import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './style';

export default class InputComponent extends React.Component {
    render(){
        return(
            <View 
            style={styles.box_input}
            >
                <TouchableOpacity
                    style={styles.touch}
                >
                    <Text>AUD</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                />
            </View> 
        );
    }
}