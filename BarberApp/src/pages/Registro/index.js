import React, {useState, useEffect} from 'react';;
import {KeyboardAvoidingView, View, TouchableOpacity, Text, StyleSheet, Animated, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Registro(){
  const navigation = useNavigation();
  const [offSett] = useState(new Animated.ValueXY({x:0, y: 90}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.Value(32));

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmaPassword] = useState(true);
  
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const togglePasswordConfirmVisibility = () => {
    setHideConfirmaPassword(!hideConfirmPassword);
  };

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
      Animated.timing(logo, {toValue: 22, duration:100, useNativeDriver: false,}),
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo, {toValue: 32, duration:100, useNativeDriver: false,}),
    ]).start();
  }
  return(
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Animated.Text style={[{fontSize: logo, opacity: opacity},styles.title]}>Registre-se</Animated.Text>
        </View>
        <Animated.View 
        style={[styles.body,{opacity: opacity,transform:[{translateY: offSett.y }]}]}>
          <TextInput style={styles.input}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={()=>{}}/>

          <TextInput style={styles.input}
                  secureTextEntry={hidePassword}
                  right={
                    <TextInput.Icon
                      icon={hidePassword ? 'eye' : 'eye-off'}
                      onPress={togglePasswordVisibility}
                    />}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={()=>{}}/>
          <TextInput style={styles.input}
                  secureTextEntry={hideConfirmPassword}
                  right={
                    <TextInput.Icon
                      icon={hideConfirmPassword ? 'eye' : 'eye-off'}
                      onPress={togglePasswordConfirmVisibility}
                    />}
            placeholder='Confirmar Senha'
            autoCorrect={false}
            onChangeText={()=>{}}/>

            <TouchableOpacity style={styles.btnSubmit} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.submitTxt}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCreate} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.createTxt}>Voltar</Text>
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
  header:{
    flex: 0.2,
    justifyContent: 'center',
  },
  body:{
    flex: 0.5,
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
    
  },
  title:{
    color: '#FFF'
  }
})