import React from "react";

import { View, Text, StyleSheet,} from "react-native";

export default function Footer(){
  return(
    <View>
      <Text style={styles.textFooter}>Created by Adriel and Caio</Text>
    </View>
  )
}



const styles = StyleSheet.create(
  {
    textFooter:{
      position: "absolute",
      bottom: -150,
      width: 400,
      textAlign: "center",

    }
  }
)