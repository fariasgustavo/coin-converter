import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input_container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    box_input: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    opacity_box: {
        opacity: 0.7
    },
    touch: {
        flexGrow: 1,
        backgroundColor: '#f2f2f2',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    input:{
        flexGrow: 3,
        backgroundColor: '#c2c2c2',
        height: 45,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        padding: 5
    }
});

export default styles;