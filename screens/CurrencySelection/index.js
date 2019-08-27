import React from 'react';
import { View, ScrollView, Image, Text,TouchableOpacity } from 'react-native';
import styles from './style';

import {connect} from 'react-redux';

const CurrencySelection = ({ navigation,currencies }) => {
    return(
        <ScrollView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.closeIcon} source={require('../../assets/close.png')} />
            </TouchableOpacity>

            <Text style={styles.title}>Escolha uma moeda:</Text>

            <View style={styles.bodyContainer}>

                {currencies.map(({ currency }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        key={currency}
                    >
                        <Text style={styles.itemText}>{currency}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

export default connect(state => ({ currencies: state.currencies}))(CurrencySelection);