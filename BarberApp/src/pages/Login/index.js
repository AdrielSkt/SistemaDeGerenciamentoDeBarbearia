import React, {useState, useEffect} from 'react';;
import {KeyboardAvoidingView, View, Image, TouchableOpacity, Text, StyleSheet, Animated, Keyboard} from 'react-native';
import {DefaultTheme, configureFonts,TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
  const navigation = useNavigation();
  const [offSett] = useState(new Animated.ValueXY({x:0, y: 90}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:250, y: 250}));

  useEffect(()=> {
    keybordShow = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keybordHide = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offSett.y, {toValue: 0, speed: 4, bounciness: 20, useNativeDriver: false,}), 
      Animated.timing(opacity, {toValue: 1, duration: 500, useNativeDriver: false,}),
      
    ]).start();
  }, [])



  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {toValue: 150, duration:100, useNativeDriver: false,}),
      Animated.timing(logo.y, {toValue: 150, duration:100, useNativeDriver: false,}),
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {toValue: 250, duration:100, useNativeDriver: false,}),
      Animated.timing(logo.y, {toValue: 250, duration:100, useNativeDriver: false,}),
    ]).start();
  }
  return(
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logo}>
          <Animated.Image style={[{width:logo.x, height:logo.y, opacity: opacity},styles.imageLogo]}
            source={require('../../img/logoTa.png')}
          />
        </View>
        <Animated.View 
        style={[styles.body,{opacity: opacity,transform:[{translateY: offSett.y }]}]}>
          <TextInput style={styles.input}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={()=>{}}/>

          <TextInput style={styles.input}
                  secureTextEntry
                  right={<TextInput.Icon icon="key" />}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={()=>{}}/>

            <TouchableOpacity style={styles.btnSubmit} onPress={()=>{navigation.navigate('Home', {auth:true})}}>
                <Text style={styles.submitTxt}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCreate}>
                <Text style={styles.createTxt}>Criar conta</Text>
            </TouchableOpacity>
        </Animated.View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000919',
    paddingBottom: 10
  },
  logo:{
    flex: 1,
    justifyContent: 'center',
  },
  imageLogo:{
    borderRadius: 120/1,
  },
  body:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },
  btnSubmit:{
    backgroundColor: '#0B2BCA',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitTxt:{
    color: '#FFF',
    fontSize: 18
  },
  btnCreate:{
    marginTop: 10

  },
  createTxt:{
    color: '#FFF',
    
  }
})