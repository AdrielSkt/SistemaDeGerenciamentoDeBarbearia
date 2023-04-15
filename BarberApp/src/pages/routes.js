import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Entypo, Feather} from '@expo/vector-icons';
import ButtonAgendar from "../components/ButtonAgendar";
import Menu from './Menu';
import Agendar from './Agendar';
import Agendamentos from './Agendamentos';
import Perfil from './Perfil';
import Sobre from './Sobre';

const Tab = createBottomTabNavigator();

export default function Routes({nomeCliente}){
  return(

    <Tab.Navigator screenOptions={{ headerShown: false, 
    tabBarStyle: { 
      position: 'absolute', 
      backgroundColor: 'black' },
      tabBarActiveTintColor: '#0B2BCA',
      }} >
      <Tab.Screen name="Menu" children={()=><Menu nomeCliente={nomeCliente}/>} options={{tabBarIcon: ({color, size})=> (<Entypo name="documents" color={color} size={size}/>)}}/>
      <Tab.Screen name="Agendamentos" children={()=><Agendamentos nomeCliente={nomeCliente}/>} options={{tabBarIcon: ({color, size})=> (<Entypo name="colours" color={color} size={size}/>)}}/>
      <Tab.Screen name="Agendar" children={()=><Agendar nomeCliente={nomeCliente}/>} options={{tabBarLabel: '', tabBarIcon: ({ size, focused})=> (<ButtonAgendar size={size} focused={focused}/>)}}/>
      <Tab.Screen name="Perfil" children={()=><Perfil nomeCliente={nomeCliente}/>} options={{tabBarIcon: ({color, size})=> (<Entypo name="v-card" color={color} size={size}/>)}}/>
      <Tab.Screen name="Sobre" children={()=><Sobre nomeCliente={nomeCliente}/>} options={{tabBarIcon: ({color, size})=> (<Entypo name="info-with-circle" color={color} size={size}/>)}}/>
    </Tab.Navigator>

  )
}