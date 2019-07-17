import React from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';

export default class ChangeCoinsComponent extends React.Component {
    render(){
        return(
            <View
                style={styles.container_change_coins}
            >
                <Image
                    style={styles.image_change}
                    source={require('../../assets/change.png')}
                />
                <TouchableWithoutFeedback>
                    <Text 
                        style={styles.text_change_coins}
                    >
                        Alternar Moedas
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}