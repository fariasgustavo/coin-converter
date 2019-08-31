import React from 'react';
import { View } from 'react-native';

import ImageComponent from '../../components/image/index';
import TitleComponent from '../../components/title/index';
import InputComponent from '../../components/input/index';
import DetailsComponent from '../../components/details/index';
import ChangeCoinsComponent from '../../components/change-coins/index';

import styles from './style';

import {connect} from 'react-redux';

class MainScreen extends React.Component {
    constructor(props){
        super(props);
    }

    async componentWillMount(){
        const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
        const data = await response.json();

        const { base, date, rates } = data;

        const currencies = {
            base,
            date,
            rates: Object.entries(rates).map(([key, value]) => ({ currency: key, value })),
        };

        const { dispatch } = this.props;

        dispatch({
            type: 'ALL_CURRENCIES',
            currencies: currencies.rates,
            baseCurrency: currencies.base,
            applyCurrency:  {
                    'name': 'BRL',
                    'value': currencies.rates.find(({ currency }) => currency === 'BRL').value.toFixed(2)
                }
            
        });
    }

    render(){
        const { navigation} = this.props;
        return (
            <View style={styles.container}>
                <ImageComponent/>
                <TitleComponent/>
                <InputComponent navigation={ navigation } />
                <DetailsComponent/>
                <ChangeCoinsComponent/>
            </View>
        );
    }
}

export default connect()(MainScreen);