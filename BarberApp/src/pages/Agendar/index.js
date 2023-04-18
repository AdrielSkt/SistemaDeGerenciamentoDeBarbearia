import React, { Component } from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";

export default function Agendar({nomeCliente}){

  return (
      <View>
        <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Aobah, vamo marcar um cortezin ? !!"}></UserMessage>
      </View>
          <Text>
            Agendar
          </Text>
      </View>
  )
}