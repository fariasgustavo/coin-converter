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

        console.log(data);

        this.setState({apiData: data});
    }

    render(){
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <ImageComponent/>
                <TitleComponent/>
                <InputComponent navigation={navigation}/>
                <InputComponent navigation={navigation}/>
                <DetailsComponent/>
                <ChangeCoinsComponent/>
            </View>
        );
    }
}