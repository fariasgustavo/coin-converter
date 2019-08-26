import React from 'react';
import { View } from 'react-native';

import ImageComponent from '../../components/image/index';
import TitleComponent from '../../components/title/index';
import InputComponent from '../../components/input/index';
import DetailsComponent from '../../components/details/index';
import ChangeCoinsComponent from '../../components/change-coins/index';

import styles from './style';

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

        const data_formated = {
            base,
            date,
            rates: Object.entries(rates).map(([key, value]) => ({ currency: key, value })),
        };

        this.setState({apiData: data_formated});
    }

    render(){
        const { navigation } = this.props;
        
        return (
            <View style={styles.container}>
                <ImageComponent/>
                <TitleComponent/>
                <InputComponent initialCurrencyIndex={ 0 } navigation={ navigation } />
                <InputComponent initialCurrencyIndex={ 1 } navigation={ navigation } />
                <DetailsComponent/>
                <ChangeCoinsComponent/>
            </View>
        );
    }
}

export default MainScreen;