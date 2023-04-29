import React, {useState, useEffect} from "react";
import { 
    View,
     Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated
  } from "react-native";
import UserMessage from "../../components/UserMessage";
import Header from "../../components/Header";
import { ProgressBar} from 'react-native-paper';



import {Canvas, Fill, Group, LinearGradient, Path} from '@shopify/react-native-skia';
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";


export default function Menu ({nomeCliente, navigation}){


  const [largura] = useState(new Animated.Value(125));
  const [animation] = useState(new Animated.Value(0));
  

  
  
  
  useEffect(() => {
    Animated.parallel([
      Animated.timing(largura,{toValue: 380, duration: 2000, useNativeDriver: false}),
      Animated.timing(animation, {toValue: 1, duration: 2000, useNativeDriver: true})
    ]).start();
    }, []);
  
  
    const animatedStyles = {
      opacity: animation,
      transform: [
        {
          translateX: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0]
          })
        }
      ]
    };


  return(
    <View>
            <Header nomeCliente={nomeCliente}/>
      <View>
          <UserMessage mensagem={"Bem vindo "+nomeCliente+" !!"}></UserMessage>
      </View>
      <View>
        
      </View>
      
      <View style={styles.buttons}>
            <Animated.View style={{width: largura}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
                <Image style={styles.btnImage} source={require('./../../img/menu/marcarHorario.jpg')}/>
                <View>
                <Animated.Text style={[styles.btnText, animatedStyles]}>Marcar Horario</Animated.Text>
                <ProgressBar indeterminate visible={true} />
                </View>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{width: largura}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=>{navigation.navigate('Agendamentos')}}>
                <Image style={styles.btnImage} source={require('./../../img/menu/horariosMarcados.jpg')} />
                <View>
                <Animated.Text style={[styles.btnText, animatedStyles]}>Horarios Marcados</Animated.Text>
                <ProgressBar indeterminate visible={true}/>
                </View>
            </TouchableOpacity>
            </Animated.View>
      </View> 

    </View>
    
  )
}

const styles = StyleSheet.create({
  buttons:{
      marginTop: 50,   
  },
  button:{
      height: 120,
      backgroundColor: 'rgba(123, 139, 231, 0.5)',
      borderRadius: 70/1,
      marginTop: 40,
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  btnImage:{
      width: 120,
      height: 120,
      alignItems: 'flex-start',
      borderRadius: 70/1,
  },
  btnText:{
      fontSize: 20,
      textShadowRadius: 10,
      textAlign: 'center',
      marginTop: 44,
  },
});