import { FC } from 'react';
import {
    Text,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { useAppDispatch } from '../../store/storeHooks';
import { onIHave, onIwillGet } from '../../store/Slices/CurrencyListSlice';
import { onChangeIhave, onChangeIwiilGet } from '../../store/Slices/CalculatorSlice';

// STYLES
import { styles } from './ConverterBoxStyles';

interface ICyrrencyList {
    code: string;
}

interface iConverterBox {
    title: string;
    desc: string;
    defaultValue: string;
    dataCyrrencyList: ICyrrencyList[];
    course: number;
    valueCount: number | string;
}

export const ConverterBox: FC<iConverterBox> = ({
    title,
    desc,
    defaultValue,
    dataCyrrencyList,
    course,
    valueCount,
}) => {
    const dispatch = useAppDispatch();

    const handleValue = (newValue: string | null): void => {
        if (title === 'Currency i Have') {
            dispatch(onIHave(newValue));
        } else {
            dispatch(onIwillGet(newValue));
        }
    };

    const handleOnChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = e.nativeEvent.text ? Number(e.nativeEvent.text.replace(/[^0-9.]/g, '')) : '';
        title === 'Currency i Have'
            ? dispatch(onChangeIhave({ value, course }))
            : dispatch(onChangeIwiilGet({ value, course }));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.converterBox}>
                <Text style={styles.converterBox__title}>{title}</Text>
                <Text style={styles.converterBox__desc}>{desc}</Text>
                <View style={styles.converterBox__content}>
                    <View style={styles.converterBox__select}>
                        {/* @ts-ignore */}
                        <SelectDropdown
                            data={dataCyrrencyList}
                            onSelect={(selectedItem) => {
                                handleValue(selectedItem);
                            }}
                            buttonStyle={styles.onverterBox__selectButton}
                            buttonTextStyle={styles.onverterBox__selectButton_text}
                            defaultValue={defaultValue}
                            defaultButtonText={defaultValue}
                            dropdownStyle={styles.onverterBox__dropdown}
                            renderDropdownIcon={() => (
                                // @ts-ignore
                                <Entypo name="chevron-small-down" size={24} color="#fff" />
                            )}
                        />
                    </View>
                    <View style={styles.converterBox__currency}>
                        <Text style={styles.converterBox__currency_text}>{defaultValue}</Text>
                        <TextInput
                            placeholder="0"
                            value={valueCount.toString()}
                            maxLength={10}
                            keyboardType="number-pad"
                            keyboardAppearance="dark"
                            onChange={handleOnChange}
                            autoComplete={'off'}
                            style={styles.converterBox__textInput}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
