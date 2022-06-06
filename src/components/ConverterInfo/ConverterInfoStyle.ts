import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    converterInfo: {
        marginTop: 30,
        paddingBottom: 10,
    },
    titleBox: {
        borderBottomColor: '#2a333e',
        borderBottomWidth: 1,
        paddingBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 17,
        color: '#fff',
    },
    titleCurrency: {
        color: '#fff',
    },
    tableBox: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableName: {
        color: 'orange',
        fontWeight: '700',
        width: '33%',
    },
    tableBuy: {
        color: 'orange',
        fontWeight: '700',
        width: '33%',
        textAlign: 'center',
    },
    tableSell: {
        color: 'orange',
        fontWeight: '700',
        width: '33%',
        textAlign: 'right',
    },
    list: {
        // marginTop: 10,
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    itemName: {
        color: '#fff',
        textTransform: 'uppercase',
        width: '33%',
    },
    itemBuy: {
        color: '#fff',
        width: '33%',
        textAlign: 'center',
    },
    itemSell: {
        color: '#fff',
        width: '33%',
        textAlign: 'right',
    },
});

export default styles;
