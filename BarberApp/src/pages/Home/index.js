import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Routes from '../routes';
// import Menu from '../../components/Menu';
import Menu from '../Menu';
import {NavigationContainer} from '@react-navigation/native'

const nomeCliente = 'Osorio Adriel';
export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>      
        <Routes nomeCliente={nomeCliente}></Routes>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
