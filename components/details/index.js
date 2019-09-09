import React from 'react';
import { Text } from 'react-native';
import styles from './style';

import {connect} from 'react-redux';

const DetailsComponent = ({ applyCurrency, baseCurrencyName}) => (
    <Text 
    style={styles.text_detail}
    >
        1 {baseCurrencyName} = {applyCurrency.base} {applyCurrency.name} em 8 de Julho, 2019
    </Text>
);

export default connect(state => ({ applyCurrency: state.applyCurrency, baseCurrencyName: state.baseCurrency.name}))(DetailsComponent);