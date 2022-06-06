import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light" />
                <Container />
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14191e',
    },
});
