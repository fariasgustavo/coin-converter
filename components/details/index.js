import React from 'react';
import { Text } from 'react-native';
import styles from './style';

export default class DetailsComponent extends React.Component {
    render(){
        return(
            <Text 
                style={styles.text_detail}
            >
                1 USD = 0,56 GBP em 8 de Julho, 2019
            </Text>
        );
    }
}