import React from 'react';
import { View, ScrollView, Image, Text,TouchableOpacity } from 'react-native';
import styles from './style';

import {connect} from 'react-redux';


class CurrencySelection extends React.Component {
    constructor(props){
        super(props);
    }
    
    async selectCurrency(currencySelected,value){
        const {dispatch,navigation} = this.props;
        const change = navigation.getParam('change');

        if(change == 'base'){
            const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${ currencySelected }`);
            const data = await response.json();

            const { base, date, rates } = data;
            const currencies = {
                base,
                date,
                rates: Object.entries(rates).map(([key, value]) => ({ currency: key, value })),
            };
            
            const{ applyCurrency } = this.props;
            
            dispatch({
                type: 'ALL_CURRENCIES',
                currencies: currencies.rates,
                baseCurrency: {
                    'name': currencies.base,
                    'value': '1'
                },
                applyCurrency: {
                    'name': applyCurrency.name,
                    'value': currencies.rates.find(({ currency }) => currency === applyCurrency.name).value.toFixed(2),
                    'base': currencies.rates.find(({ currency }) => currency === applyCurrency.name).value.toFixed(2)
                }
            });
        }else{
            let newApplyCurrency = {
                'name': currencySelected,
                'base': value.toFixed(2),
                'value': value.toFixed(2)
            }

            dispatch({
                type: 'UPDATE_APPLY_CURRENCY',
                applyCurrency:  newApplyCurrency
            })
        }
    }

    render(){
        const{currencies,navigation} = this.props;

        return(
            <ScrollView style={styles.container}>
    
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.closeIcon} source={require('../../assets/close.png')} />
                </TouchableOpacity>
    
                <Text style={styles.title}>Escolha uma moeda:</Text>
    
                <View style={styles.bodyContainer}>
    
                    {currencies.map(({ currency,value }) => (
                        <TouchableOpacity
                            style={styles.itemContainer}
                            key={currency}
                            onPress={ () => {
                                    this.selectCurrency(currency,value);
                                    navigation.goBack(); 
                                }
                            }
                        >
                            <Text style={styles.itemText}>{currency}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

export default connect(state => ({ currencies: state.currencies, applyCurrency: state.applyCurrency}))(CurrencySelection);