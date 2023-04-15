import React, { Component } from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";

export default function Sobre({nomeCliente}){

  return (
      <View>
          <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Aqui um pouquinho sobre nós !!"}></UserMessage>
      </View>
          <Text>
            Sobre
          </Text>
      </View>
  )
}