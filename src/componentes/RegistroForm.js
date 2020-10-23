import React from 'react';
import {StyleSheet, Text, TextInput, Button} from 'react-native';
export default function RegistroForm(props) {
    console.log(props);
    const {cambiosForm} = props;
  return (
    <>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Ingrese correo" 
        placeholderTextColor="#969696"/>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Ingrese contrasena" 
        placeholderTextColor="#969696"/>
      <TextInput 
        style={estilo.textInput} 
        placeholder="Repetir contrasena" 
        placeholderTextColor="#969696"/>
      <Button  title = "Iniciar Sesion"/>
    </>
  );
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
  }
})
