import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    converterBox: {
        paddingBottom: 30,
    },
    converterBox__title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 17,
        textTransform: 'uppercase',
    },
    converterBox__desc: {
        color: 'grey',
        paddingTop: 5,
        paddingBottom: 10,
    },
    converterBox__content: {
        borderTopWidth: 1,
        borderTopColor: '#2a333e',
        paddingTop: 10,
    },
    converterBox__select: {
        alignItems: 'flex-end',
    },
    converterBox__textInput: {
        color: '#fff',
        fontSize: 50,
        minWidth: 100,
        maxWidth: 290,
    },
    converterBox__currency: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginTop: 10,
    },
    converterBox__currency_text: {
        color: '#fff',
        fontSize: 25,
        marginRight: 10,
        paddingBottom: 5,
    },
    onverterBox__selectButton: {
        backgroundColor: 'orange',
        padding: 10,
        width: 100,
        height: 'auto',
    },
    onverterBox__selectButton_text: {
        color: '#fff',
        fontWeight: '600',
    },
    onverterBox__dropdown: {
        maxHeight: 300,
    },
});
