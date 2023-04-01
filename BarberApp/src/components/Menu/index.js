import React from "react";
import { 
    View,
     Text,
    TouchableOpacity,
    Image,
    StyleSheet,
  } from "react-native";
import UserMessage from "../UserMessage";

export default function Menu({mensagem}){
return(
    <View>
        <View>
        <UserMessage mensagem={mensagem}></UserMessage>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                <Image style={styles.btnImage} source={require('./../../img/menu/marcarHorario.jpg')} />
                <Text style={styles.btnText}>Marcar Horario</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                <Image style={styles.btnImage} source={require('./../../img/menu/horariosMarcados.jpg')} />
                <Text style={styles.btnText}>Horarios Marcados</Text>
            </TouchableOpacity>
        </View>
    </View>

)
}

const styles = StyleSheet.create({
    buttons:{
        marginTop: 70,   
    },
    button:{
        width: 380,
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


