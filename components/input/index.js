import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import styles from './style'

import {connect} from 'react-redux';


const InputComponent = ({ navigation,applyCurrency,baseCurrency,dispatch }) => {
    return(
        <View>
            <View 
            style={styles.box_input}
            >
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => navigation.navigate('CurrencySelection', { change: 'base' })}
                >
                    <Text>{ baseCurrency.name }</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    value={ baseCurrency.value.toString() }
                    onChangeText={ (newValue) => dispatch({
                        type: 'CHANGE_BASE_CURRENCY_VALUE',
                        baseCurrency: {
                            'name': baseCurrency.name,
                            'value': newValue
                        },
                        applyCurrency: {
                            'name': applyCurrency.name,
                            'value': parseFloat(newValue * applyCurrency.base).toFixed(2),
                            'base': applyCurrency.base
                        }
                    }) }
                />
            </View> 

            <View 
            style={styles.box_input}
            >
                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => navigation.navigate('CurrencySelection',{ change: 'apply' })}
                >
                    <Text>{ applyCurrency.name }</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    value={ applyCurrency.value }
                    onChangeText={ (newValue) => dispatch({
                        type: 'CHANGE_APPLY_CURRENCY_VALUE',
                        baseCurrency: {
                            'name': baseCurrency.name,
                            'value': parseFloat(newValue / applyCurrency.base).toFixed(2)
                        },
                        applyCurrency: {
                            'name': applyCurrency.name,
                            'value': newValue,
                            'base': applyCurrency.base
                        }
                    }) }
                />
            </View> 
        </View>
    );

}

export default connect(state => ({ applyCurrency: state.applyCurrency, baseCurrency: state.baseCurrency}))(InputComponent);