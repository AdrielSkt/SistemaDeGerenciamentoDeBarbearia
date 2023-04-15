import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Menu from './Menu';
import Agendar from './Agendar';
import Agendamentos from './Agendamentos';
import Perfil from './Perfil';
import Sobre from '.';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(

    <Tab.Navigator screenOptions={{ headerShown: false}} >
      <Tab.Screen name="Menu" component={Menu}/>
      <Tab.Screen name="Agendar" component={Agendar}/>
      <Tab.Screen name="Agendamentos" component={Agendamentos}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>

  )
}
