import React, {useState, useEffect}from 'react';
import {StyleSheet, Text , View} from 'react-native';
import firebase from './src/utils/firebase';
import Auth from './src/componentes/Auth';
import 'firebase/auth';
export default function App() {
  const [usuario, setUsuario] = useState(false);
  console.log("test app");
  useEffect(() => {
      firebase.auth().onAuthStateChanged(response =>{
        console.log("usuario loggueado", response);
        setUsuario(response);
      })
  }, [])
  return (
    <>
      <View style = {estilo.fondo}>
        {/* <Text style={{color:'#fff'}}> App Cumpleanhero</Text> */}
        { usuario ? <Text style={{color:'#fff'}}> Estas loggueado</Text> :  <Auth/> }
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