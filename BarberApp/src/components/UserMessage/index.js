import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function UserMessage({mensagem}){
  return(
      <View style={styles.container}>
        <View>
        <Text style={styles.texto}>{mensagem}</Text>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 99
  },
  texto:{
    color: '#FFF',
    fontSize: 18,
  }

})