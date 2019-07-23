import React from 'react';
import { View, FlatList, Text,TouchableOpacity } from 'react-native';
import style from '../style';

export default class CurrencySelection extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currencies: []
        }
    }

    componentWillMount(){
        const {navigation} = this.props;
        this.setState({currencies: navigation.getParam('api').rates});
    }

    render(){       
        const {currencies} = this.state;
        console.log(currencies);
        return(
            <View style={style.container}>

                {currencies.map(({ currency }) => (
                    <TouchableOpacity
                        key={currency}
                    >
                        <Text style={ style.currency_item }>{currency}</Text>
                    </TouchableOpacity>
                ))}

            </View>
        );
    }

}