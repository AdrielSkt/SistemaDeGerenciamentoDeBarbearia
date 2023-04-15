import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Entypo, Feather} from '@expo/vector-icons';
import ButtonAgendar from "../components/ButtonAgendar";
import Menu from './Menu';
import Agendar from './Agendar';
import Agendamentos from './Agendamentos';
import Perfil from './Perfil';
import Sobre from '.';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(

    <Tab.Navigator screenOptions={{ headerShown: false, 
    tabBarStyle: { 
      position: 'absolute', 
      backgroundColor: 'black' },
      tabBarActiveTintColor: '#0B2BCA',
      }} >
      <Tab.Screen name="Menu" component={Menu} options={{tabBarIcon: ({color, size})=> (<Entypo name="documents" color={color} size={size}/>)}}/>
      <Tab.Screen name="Agendamentos" component={Agendamentos} options={{tabBarIcon: ({color, size})=> (<Entypo name="colours" color={color} size={size}/>)}}/>
      <Tab.Screen name="Agendar" component={Agendar} options={{tabBarLabel: '', tabBarIcon: ({ size, focused})=> (<ButtonAgendar size={size} focused={focused}/>)}}/>
      <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: ({color, size})=> (<Entypo name="v-card" color={color} size={size}/>)}}/>
      <Tab.Screen name="Sobre" component={Sobre} options={{tabBarIcon: ({color, size})=> (<Entypo name="info-with-circle" color={color} size={size}/>)}}/>
    </Tab.Navigator>

  )
}
{/* <Feather name="scissors" color={color} size={size}/> */}