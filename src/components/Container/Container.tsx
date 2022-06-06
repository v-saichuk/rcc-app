import { FC } from 'react';
import { View } from 'react-native';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

import { styles } from './ContainerStyles';

export const Container: FC = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Main />
        </View>
    );
};
