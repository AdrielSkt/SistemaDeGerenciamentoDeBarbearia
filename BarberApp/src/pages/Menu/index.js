import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import UserMessage from "../../components/UserMessage";

export default function Menu ({mensagem}){



  return(
    <View>
      <View>
          <UserMessage mensagem={mensagem}></UserMessage>
      </View>
      <View>
          <Text>
            Agendar
          </Text>
      </View>
    </View>
    
  )
}