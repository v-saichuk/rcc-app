import { FC, useEffect } from 'react';
import { View } from 'react-native';
import { onChangeIhave } from '../../store/Slices/CalculatorSlice';
import { getCourse } from '../../store/Slices/CourseSlice';
import { getCyrrencyInfo } from '../../store/Slices/CurrencyInfo';
import { getCurrencyList } from '../../store/Slices/CurrencyListSlice';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { ConverterBox } from '../ConverterBox/ConverterBox';
import { ConverterInfo } from '../ConverterInfo/ConverterInfo';

// STYLESc
import { styles } from './MainStyles';

const DATE = new Date().toLocaleDateString().split(/[.\/]/g).reverse().join('-');

export const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { cyrrencyList, defaultValue } = useAppSelector((state) => state.CurrencyListSlice);
    const { course } = useAppSelector((state) => state.CourseSlice);
    const { iHaveCount, iWillGetCount } = useAppSelector((state) => state.CalculatorSlice);

    useEffect(() => {
        // Получаем список валют
        dispatch(getCurrencyList());
    }, []);

    useEffect(() => {
        const value = iHaveCount;
        dispatch(onChangeIhave({ value, course }));
    }, [course]);

    useEffect(() => {
        // Отправляем выбраные валюты для получения курса с сервера
        dispatch(
            getCourse({
                iHave: defaultValue.iHave,
                iWillGet: defaultValue.iWillGet,
                date: DATE,
            }),
        );
    }, [defaultValue]);

    useEffect(() => {
        dispatch(
            getCyrrencyInfo({
                iHave: defaultValue.iHave,
                iWillGet: defaultValue.iWillGet,
                date: DATE,
            }),
        );
    }, []);

    return (
        <View style={styles.main}>
            <ConverterBox
                title="Currency i Have"
                desc="I have this much exchange"
                defaultValue={defaultValue.iHave}
                dataCyrrencyList={cyrrencyList}
                course={course}
                valueCount={iHaveCount}
            />
            <ConverterBox
                title="Current i want"
                desc="I want to buy something at this price"
                defaultValue={defaultValue.iWillGet}
                dataCyrrencyList={cyrrencyList}
                course={course}
                valueCount={iWillGetCount}
            />
            <ConverterInfo />
        </View>
    );
};
