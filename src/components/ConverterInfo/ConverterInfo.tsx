import { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../store/storeHooks';

// STYLES
import styles from './ConverterInfoStyle';

export const ConverterInfo: FC = () => {
    const { infoCourse } = useAppSelector((state) => state.CurrencyInfo);

    return (
        <View style={styles.converterInfo}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Course in banks</Text>
                <Text style={styles.titleCurrency}>USD = UAH</Text>
            </View>
            <View style={styles.tableBox}>
                <Text style={styles.tableName}>Name</Text>
                <Text style={styles.tableBuy}>Buy</Text>
                <Text style={styles.tableSell}>Sell</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemName}>nbu</Text>
                <Text style={styles.itemBuy}>{infoCourse.buy.nbu.val.slice(0, 5)}</Text>
                <Text style={styles.itemSell}>{infoCourse.sell.nbu.val.slice(0, 5)}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemName}>visa</Text>
                <Text style={styles.itemBuy}>{infoCourse.buy.visa.val.slice(0, 5)}</Text>
                <Text style={styles.itemSell}>{infoCourse.sell.visa.val.slice(0, 5)}</Text>
            </View>
            <View style={styles.items}>
                <Text style={styles.itemName}>mastercard</Text>
                <Text style={styles.itemBuy}>{infoCourse.buy.mastercard.val.slice(0, 5)}</Text>
                <Text style={styles.itemSell}>{infoCourse.sell.mastercard.val.slice(0, 5)}</Text>
            </View>
        </View>
    );
};
