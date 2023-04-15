import React from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";

export default function Perfil({nomeCliente}){

  return (
      <View>
          <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Aqui estão suas informações !!"}></UserMessage>
      </View>
          <Text>
            Perfil
          </Text>
      </View>
  )
}