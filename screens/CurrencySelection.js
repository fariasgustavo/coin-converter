import React from 'react';
import { View, ScrollView, Image, Text,TouchableOpacity } from 'react-native';
import styles from './style';

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
        const {navigation} = this.props;

        return(
            <ScrollView style={styles.container}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.closeIcon} source={require('../assets/close.png')} />
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

}