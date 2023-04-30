import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";



const{width, height} = Dimensions.get("window");
export default function RenderSlides({item, index}){
  const servicos = item.servicos.map((servico, index) => (
    <View key={servico.id} style={[styles.servicos,{marginLeft: index === 0 ? 0 : 20}]}>
      <TouchableOpacity>
        <Image source={servico.imagem} style={styles.servicoImg} />
      </TouchableOpacity>
      <Text style={{color: '#fff'}}>{servico.nome}</Text>
    </View>
  ));

  const chunks = item.sobre.match(/.{1,45}/g);
  const formattedText = chunks.join('\n');
  return(
    <TouchableOpacity
    onPress={()=> console.log('click'+ item.nome)}
    activeOpacity={1}
    style={{ width: width/2, marginLeft: 100, marginRight: 100 }}
    
    >
      <View style={styles.footer}>
      <Text style={styles.footerTitle}>{item.nome}</Text>
      </View>
        <Image source={item.imagem} style={[styles.imagem, { width: '100%'}]}/>
        <View style={styles.footer}>
          
          <Text style={styles.footerDisc}>{formattedText}</Text>
          <View style={{flexDirection:"row"}}>
            {servicos}
          </View>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',
    borderRadius: 50


  },
  imagem:{
    width,
    height: 200,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "space-between",

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
    textAlign:"center"
  },
  servicos:{
    marginTop: 10,
    alignItems:"center",
    alignContent:"center",
  },
  servicoImg:{
    width: 20,
    height: 20
  }
})