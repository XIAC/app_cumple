import React, {useState}from 'react';
import {StyleSheet, Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
export default function RegistroForm(props) {
    console.log(props);
    const {cambiosForm} = props;
    const [formDato, setFormDato] = useState(valorDefecto());
    const registrar = () =>{
      console.log("El usuario ha sido registrado");
      console.log(formDato);
    }
  return (
    <>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Ingrese correo" 
        placeholderTextColor="#969696"
        onChange= {(e) => setFormDato({...formDato, correo: e.nativeEvent.text})}/>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Ingrese contrasena" 
        placeholderTextColor="#969696"
        secureTextEntry ={true}
        onChange= {(e) => setFormDato({...formDato, contrasena: e.nativeEvent.text})}/>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Repetir contrasena" 
        placeholderTextColor="#969696"
        secureTextEntry ={true}
        onChange= {(e) => setFormDato({...formDato, repetirContrasena: e.nativeEvent.text})}/>
      <Button  title = "Iniciar Sesion" onPress={ registrar }/>
      <View>
        <TouchableOpacity>
          <Text style={estilo.volver} onPress={cambiosForm}>Volver a Login</Text>
        </TouchableOpacity>
      </View>

    </>
  );
}
function valorDefecto(){
  return {
    correo: '',
    contrasena: '',
    repetirContrasena:''
  }
}
const estilo = StyleSheet.create({
  textInput:{
    height: 40,
    color: "#fff",
    width: "80%",
    marginBottom: 25,
    backgroundColor: "#1e3040",
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize:15,
    borderWidth:1,
    borderColor:"#1e3040"
  },
  volver:{
    color: "#fff",
    marginTop: 40
  }
})
