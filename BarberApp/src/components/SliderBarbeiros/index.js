import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";



const{width, height} = Dimensions.get("window");
export default function RenderSlides({item}){
  return(
    <TouchableOpacity
    onPress={()=> console.log('click')}
    activeOpacity={1}
    >
        <Image source={item.imagem} style={styles.imagem}/>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>{item.nome}</Text>
          <Text style={styles.footerDisc}>{item.sobre}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',


  },
  imagem:{
    width,
    height: 200,
    resizeMode: "cover",
    marginVertical: 20, 
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 40,
    alignItems: "center",
    backgroundColor:"#000"
  },
  footerTitle:{
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",


  },
  footerDisc:{
    color: '#fff',
  }
})