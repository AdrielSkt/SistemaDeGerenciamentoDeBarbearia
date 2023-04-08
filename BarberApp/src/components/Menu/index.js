import React, {useState, useEffect} from "react";
import { 
    View,
     Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Animated
  } from "react-native";
import UserMessage from "../UserMessage";

export default function Menu({mensagem}){

const [largura, setLargura] = useState(new Animated.Value(0));


Animated.timing(
    largura,
    {
        toValue: 380,
        duration: 2000,
        useNativeDriver: false
    }
).start();


return(
    <View>
        <View>
        <UserMessage mensagem={mensagem}></UserMessage>
        </View>

        <View style={styles.buttons}>
            <Animated.View style={{width: largura}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                <Image style={styles.btnImage} source={require('./../../img/menu/marcarHorario.jpg')} />
                <Text style={styles.btnText}>Marcar Horario</Text>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{width: largura}}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                <Image style={styles.btnImage} source={require('./../../img/menu/horariosMarcados.jpg')} />
                <Text style={styles.btnText}>Horarios Marcados</Text>
            </TouchableOpacity>
            </Animated.View>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
    buttons:{
        marginTop: 70,   
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
        paddingLeft: 10,
    }

})


