import { FC, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { ModalDatePicker } from 'react-native-material-date-picker';
import { Fontisto } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { getCourse } from '../../store/Slices/CourseSlice';

// STYLES
import { styles } from './HeaderStyles';

export const Header: FC = () => {
    const dispatch = useAppDispatch();
    const [initialDate, setInitialDate] = useState(new Date());
    const { defaultValue } = useAppSelector((state) => state.CurrencyListSlice);

    const handleOnSelect = (date: Date) => {
        if (date.toLocaleDateString() > new Date().toLocaleDateString()) {
            return Alert.alert('', `We can't look to the future yet 😉`);
        }

        const transformDate = date.toLocaleDateString().split(/[.\/]/g).reverse().join('-');

        dispatch(
            getCourse({
                iHave: defaultValue.iHave,
                iWillGet: defaultValue.iWillGet,
                date: transformDate,
            }),
        );
        setInitialDate(date);
    };

    return (
        <View style={styles.header}>
            <Text style={styles.header__title}>RCC</Text>
            {/* @ts-ignore */}
            <ModalDatePicker
                button={
                    <View style={styles.header__date_content}>
                        <Text style={styles.header__date}>{initialDate.toLocaleDateString()}</Text>
                        {/* @ts-ignore */}
                        <Fontisto name="date" size={20} color="orange" />
                    </View>
                }
                color="orange"
                onSelect={(date) => handleOnSelect(date)}
                isHideOnSelect={true}
                initialDate={initialDate}
            />
        </View>
    );
};
