import React from 'react';
import { View, FlatList, Text } from 'react-native';

export default class CurrencySelection extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currencies: {}
        }
    }

    componentWillMount(){
        const { data } = this.props;
        this.setState({currencies: data});
    }

    render(){
        <View>
            <FlatList
                data={[
                    this.state.currencies
                ]}

                renderItem={({item}) => <Text>1</Text>}
            />
        </View>
    }

}