import React, { useRef, useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";
import { FlatList, StyleSheet } from "react-native";
import RenderSlides from "../../components/SliderBarbeiros";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

export default function ListaBarbeiros({barbeiros}){
  const navigation = useNavigation();
  let flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonPress = (index) => {
    flatListRef.current.scrollToIndex({animated: true, index: index});
    setCurrentIndex(index);
  };

  const onViewRef = useRef(({changed})=> {
    if(changed[0].isViewable){
      setCurrentIndex(changed[0].index);
    }
  });

  const onFlatlistItemChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        data={barbeiros} 
        renderItem={({ item, index }) => (
          <RenderSlides
            item={item}
            index={index}
            navigation={navigation}
          />
        )} 
        keyExtractor={(item, index)=> index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.carousel}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        onMomentumScrollEnd={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / Dimensions.get('window').width);
          onFlatlistItemChange(index);
        }}
      />
      <View style={styles.dotView}>
        {barbeiros.map(({}, index)=> (
          <TouchableOpacity
            key={index.toString()}
            style={[styles.circle, {backgroundColor:index === currentIndex ? 'blue' : 'gray'}]}
            onPress={() => handleButtonPress(index)}
          />
        ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  carousel:{
      maxHeight:400,
      marginTop: 50

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