import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";



export default function RenderSlides({item}){
  const {width} = Dimensions.get("window");
  return(
    <View style={[styles.container,{width}]}>
        <Image style={[styles.imagem,{width}]} source={item.imagem}/>
        <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>{item.sobre}</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000FFF',
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
  imagem:{
    resizeMode: "contain",
    width: 200,
    height: 200,
    justifyContent: "center",
  },
  nome: {

  }
})

//<FlatList style={{marginTop: 70, marginLeft: 20, marginRight:20}}
//data={barbeiros}
//showsHorizontalScrollIndicator
//pagingEnabled
//horizontal
//bounces={false}
//snapToAlignment="center"
//scrollEventThrottle={16}
//decelerationRate="fast"
//renderItem={RenderSlides}
///>