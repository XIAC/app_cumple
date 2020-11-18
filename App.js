import React, {useState, useEffect}from 'react';
import {Button, StyleSheet, Text , View, LogBox} from 'react-native';
import { decode, encode} from 'base-64';
import firebase from './src/utils/firebase';
import Auth from './src/componentes/Auth';
import ListaCumpleanero from './src/componentes/ListaCumpleaneros';
import 'firebase/auth';

if(!global.btoa) global.btoa= encode;
if(!global.atob) global.atob= decode;
// LogBox.ignoreLogs();
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