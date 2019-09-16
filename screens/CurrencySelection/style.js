import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginBottom: 24,
        marginTop: 24 + 12,
    },

    closeIcon: {
        height: 30,
        width: 30,
    },

    title: {
        marginVertical: 24,
        fontSize: 30,
        fontWeight: 'bold',
    },

    bodyContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    itemContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgb(180, 180, 180)',
        paddingVertical: 12,
        paddingHorizontal: 16,
        margin: 8,
    },

    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    selectCurrency: {
        backgroundColor: '#cccccc'
    }
});

export default styles;