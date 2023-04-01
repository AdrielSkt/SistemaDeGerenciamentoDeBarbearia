import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const nomeCliente = 'Osorio Adriel';
export default function Home() {
  return (
    <View style={styles.container}>
      <Header nomeCliente={nomeCliente}/>
      <StatusBar style="auto" />
      <Menu mensagem={"Bem vindo "+nomeCliente+" !"}></Menu>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
