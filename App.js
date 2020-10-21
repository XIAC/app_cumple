import React from 'react';
import {StyleSheet, Text , View} from 'react-native';
import firebase from './src/utils/firebase';
export default function App() {
  console.log("test app");
  return (
    <>
      <View style = {estilo.fondo}>
        <Text> App Cumpleanhero</Text>
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