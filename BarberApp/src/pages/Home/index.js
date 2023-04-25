import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Routes from '../TabRoutes';
import Menu from '../Menu';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';


const Stack = createStackNavigator();
const nomeCliente = 'Osorio Adriel';
const auth = true;
export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>  
        <Stack.Navigator initialRouteName="PagInit">
          <Stack.Screen name="PagInit" children={()=> auth ? <Login></Login> : <Routes nomeCliente={nomeCliente}></Routes>}></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
          
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
