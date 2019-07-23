import React from 'react';
import { View } from 'react-native';

import ImageComponent from '../components/image/index';
import TitleComponent from '../components/title/index';
import InputComponent from '../components/input/index';
import DetailsComponent from '../components/details/index';
import ChangeCoinsComponent from '../components/change-coins/index';

import styles from '../style';

export default class MainScreen extends React.Component {
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
        const { apiData } = this.state;

        return (
            <View style={styles.container}>
                <ImageComponent/>
                <TitleComponent/>
                <InputComponent navigation={navigation} api={apiData}/>
                <InputComponent navigation={navigation} api={apiData}/>
                <DetailsComponent/>
                <ChangeCoinsComponent/>
            </View>
        );
    }
}