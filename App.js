import React, {useState, useEffect}from 'react';
import {Button, StyleSheet, Text , View} from 'react-native';
import firebase from './src/utils/firebase';
import Auth from './src/componentes/Auth';
import ListaCumpleanero from './src/componentes/ListaCumpleaneros';
import 'firebase/auth';
export default function App() {
  const [usuario, setUsuario] = useState(false);
  useEffect(() => {
      firebase.auth().onAuthStateChanged(response =>{
        console.log("usuario loggueado", response);
        setUsuario(response);
      })
  }, [])
  return (
    <>
      <View style = {estilo.fondo}>
        { usuario ? <ListaCumpleanero/> :  <Auth/> }
      </View>
    </>
  );
}
const estilo = StyleSheet.create({
  fondo:{
    backgroundColor: "#15212b",
    height: "100%"
  }
})