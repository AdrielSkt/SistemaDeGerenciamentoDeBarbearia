import React from "react";
import { View } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";
import {StyleSheet } from "react-native";
import ListaBarbeiros from "../../components/ListaBarbeiros";

const barbeiros = [
  {
    id:'1',
    nome: 'Caio',
    sobre: 'Um barbeiro é um profissional que trabalha com cortes e cuidados com cabelo e barba. ',
    imagem: require('../../img/menu/horariosMarcados.jpg'),
    servicos:[
      {id: 1, nome: 'corte', imagem: require('../../img/219983.png')},
      {id: 2, nome: 'Barba', imagem: require('../../img/219983.png')},
      {id: 3, nome: 'Progressiva', imagem: require('../../img/219983.png')}
    ]
  },
  {
    id:'2',
    nome: 'Lucas',
    sobre: 'Um barbeiro é um profissional que trabalha com cortes e cuidados com cabelo e barba. ',
    imagem: require('../../img/219983.png'),
    servicos:[
      {id: 1, nome: 'corte', imagem: require('../../img/219983.png')},
      {id: 2, nome: 'Barba', imagem: require('../../img/219983.png')},
      {id: 3, nome: 'Progressiva', imagem: require('../../img/219983.png')}
    ]
  },
  {
    id:'2',
    nome: 'Adriel',
    sobre: 'Um barbeiro é um profissional que trabalha com cortes e cuidados com cabelo e barba. ',
    imagem: require('../../img/219983.png'),
    servicos:[
      {id: 1, nome: 'corte', imagem: require('../../img/219983.png')},
      {id: 2, nome: 'Barba', imagem: require('../../img/219983.png')},
      {id: 3, nome: 'Progressiva', imagem: require('../../img/219983.png')}
    ]
  }
];

export default function Agendar({nomeCliente}){
 
  return (
   <View>
         <Header nomeCliente={nomeCliente}/>
      <View>
        <UserMessage mensagem={"Aobah, vamo marcar um cortezin ? !!"}></UserMessage>
      </View>
      <ListaBarbeiros barbeiros={barbeiros}></ListaBarbeiros>
   </View>
  )
}

const styles = StyleSheet.create({
  
})