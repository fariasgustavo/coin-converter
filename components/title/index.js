import React from 'react';
import { Text } from 'react-native';
import styles from './style';

export default class TitleComponent extends React.Component {
    render(){
        return(
            <Text
                style={styles.title}
            >
                Conversor de Moedas
            </Text>
        );
    }
}