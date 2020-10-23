import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
export default function LoginForm(props) {
    const { cambiosForm} = props;
    // const  loguearse= () =>{
    //     console.log("Logueandose");
    // }
  return (
    <>
        <View>
            <Text style={{color:'#fff'}}>LoginForm</Text>
            {/* <Button title="Ingresar"/>  */}
 
        </View>
        <TouchableOpacity>
            <Text style={estiloLogin.link} onPress={cambiosForm}>Ir a Registro</Text>
        </TouchableOpacity>

    </>
  );
}
const estiloLogin = StyleSheet.create({
    link:{
        color: '#fff',
        fontSize: 15
    }
})
