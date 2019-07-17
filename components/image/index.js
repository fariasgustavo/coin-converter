import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';

export default class ImageComponent extends React.Component {
    render(){
        return(
            <View
                style={styles.image_container}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/main-icon.png')}
                />
            </View>    
        );
    }
}