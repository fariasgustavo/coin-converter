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
        this.state = {
            apiData: {}
        }
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

        //console.log(currencies.rates.find(({ currency,value }) => currency === 'BRL').value);

        dispatch({
            type: 'ALL_CURRENCIES',
            currencies: currencies.rates,
            base: currencies.base,
            applyCurrency:{
                'name': 'BRL',
                'value': currencies.rates.find(({ currency,value }) => currency === 'BRL').value
            }
        });
    }

    render(){
        const { navigation, baseCurrency, applyCurrency } = this.props;

        return (
            <View style={styles.container}>
                <ImageComponent/>
                <TitleComponent/>
                <InputComponent initialCurrency={ baseCurrency } navigation={ navigation } initialValue={ '1' } />
                <InputComponent initialCurrency={ applyCurrency.name } navigation={ navigation } initialValue={ applyCurrency.value.toString() } />
                <DetailsComponent/>
                <ChangeCoinsComponent/>
            </View>
        );
    }
}

export default connect(state => ({ baseCurrency: state.base, applyCurrency: state.applyCurrency}))(MainScreen);