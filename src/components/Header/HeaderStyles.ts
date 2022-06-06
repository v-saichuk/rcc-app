import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#2a333e',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    header__title: {
        fontSize: 28,
        fontWeight: '600',
        color: 'orange',
    },
    header__date: {
        fontSize: 15,
        color: '#9f9f9f',
        marginRight: 10,
    },
    header__date_content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
