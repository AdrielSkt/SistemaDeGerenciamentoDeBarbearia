import React, { useRef, useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";
import { FlatList, StyleSheet } from "react-native";
import RenderSlides from "../../components/SliderBarbeiros";
import { TouchableOpacity } from "react-native-gesture-handler";




const barbeiros = [
  {
    id:'1',
    nome: 'Caio',
    sobre: 'LAlaLAlaLAlaLA',
    imagem: require('../../img/logoTrs.png'),
    servicos:[
      {id: 1, nome: 'corte'}
    ]
  },
  {
    id:'2',
    nome: 'Lucas',
    sobre: 'LAlaLAlaLAlaLA',
    imagem: require('../../img/logoTrs.png'),
  }
];


export default function Agendar({nomeCliente}){
  let flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({changed})=> {
    if(changed[0].isViewable){
      setCurrentIndex(changed[0].index);
    }
  })

  const handleButtonPress = (index) => {
    flatListRef.current.scrollToIndex({animated: true, index: index});
    setCurrentIndex(index);
  }

  return (
    <View>
      <Header nomeCliente={nomeCliente}/>
      <View>
        <UserMessage mensagem={"Aobah, vamo marcar um cortezin ? !!"}></UserMessage>
      </View>
      <FlatList
        data={barbeiros} 
        renderItem={RenderSlides} 
        keyExtractor={(item, index)=> index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.carousel}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
      />
      <View style={styles.dotView}>
        {barbeiros.map(({}, index)=> (
          <TouchableOpacity
            key={index.toString()}
            style={[styles.circle, {backgroundColor:index === currentIndex ? 'black' : 'gray'}]}
            onPress={() => handleButtonPress(index)}
          />
        ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  carousel:{
      maxHeight:300,

  },
  dotView:{
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,

  },
  circle:{
    width: 10,
    height: 10,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginHorizontal: 5, 
  }

})