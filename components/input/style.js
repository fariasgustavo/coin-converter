import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    box_input: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    },
    opacity_box: {
        opacity: 0.7
    },
    touch: {
        width: '20%',
        backgroundColor: '#f2f2f2',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    input:{
        width: '80%',
        backgroundColor: '#c2c2c2',
        height: 45,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        padding: 5,
        color: 'white'
    }
});

export default styles;