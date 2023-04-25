import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Entypo, Feather} from '@expo/vector-icons';
export default function ButtonAgendar ({size,focused}){

  return(
    <View style={[styles.container, {backgroundColor: focused ? '#0B2BCA' : '#FFFFFF'}]}>
      <Feather name="scissors" color={focused ? '#FFFFFF':'#121212'} size={size}/>
    </View>
  )

}


const styles = StyleSheet.create({
  container:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0B2BCA',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  }
})


