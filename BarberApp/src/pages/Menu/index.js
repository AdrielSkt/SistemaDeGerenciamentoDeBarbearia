import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";

export default function Menu ({nomeCliente}){



  return(
    <View>
            <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Bem vindo "+nomeCliente+" !!"}></UserMessage>
      </View>
      <View>
          <Text>
            Menu
          </Text>
      </View>
    </View>
    
  )
}