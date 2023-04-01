import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, StatusBar, 
  TouchableOpacity,
  Image 
} from "react-native";
import {Feather} from '@expo/vector-icons';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({nomeCliente}){
  return (
    <View style={styles.container}>
          <View style={styles.content}>
            <TouchableOpacity activeOpacity={0.5} style={styles.userbutton}>
                <Image style={styles.userImage} source={require('./../../img/219983.png')} />
            </TouchableOpacity>
            <Text style={styles.username}>{nomeCliente}</Text>
          </View>

      </View>
  )
}



const styles = StyleSheet.create({
container:{
  backgroundColor: '#1400FF',
  //backgroundColor: '#000000',
  paddingTop: statusBarHeight,
  flexDirection: 'row',
  paddingStart: 16,
  paddingEnd: 16,
  paddingBottom: 44
},
content:{
  flex: 1,
  alignItems:'center',
  justifyContent: 'space-between'
},
username:{
  fontSize: 24,
  color: '#FFF',
  fontWeight: 'bold'
},
userbutton:{
  width: 110,
  height: 110,
  backgroundColor: 'rgba(123, 139, 231, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 75/1,
  marginTop: -18,
},
userImage:{
  width: 110,
  height: 110,
  borderRadius: 70/1,
}
})