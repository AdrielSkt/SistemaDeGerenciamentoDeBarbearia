import React from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";

export default function Agendamentos({nomeCliente}){

  return (
      <View>
            <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Listando seus horarios marcados !!"}></UserMessage>
      </View>
          <Text>
            Agendamentos
          </Text>
      </View>
  )
}