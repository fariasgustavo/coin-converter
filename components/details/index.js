import React from 'react';
import { Text } from 'react-native';
import styles from './style';

import {connect} from 'react-redux';

const DetailsComponent = ({ applyCurrency, baseCurrencyName, date}) => (
    <Text 
    style={styles.text_detail}
    >
        1 {baseCurrencyName} = {applyCurrency.base} {applyCurrency.name} {date}
    </Text>
);

export default connect(state => ({ applyCurrency: state.applyCurrency, baseCurrencyName: state.baseCurrency.name, date: state.date}))(DetailsComponent);