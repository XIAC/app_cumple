import React,{ useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SeccionBotones from './SeccionBotones';
import MostrarLista from './MostrarLista';
import NuevoCumpleaniero from './NuevoCumpleaniero';
export default function ListaCumpleanero() {
  const [mostrarLista, setMostrarLista] = useState(true);
  return (
    <View style={estilo.contenedor}>
      { mostrarLista ? (
          <>
            <Text>Amilcar </Text>
            <Text>Ariel</Text>
          </>
        )
        : (<NuevoCumpleaniero/>)
      }
      <SeccionBotones 
        mostrarLista ={mostrarLista} 
        setMostrarLista={setMostrarLista}/>
     </View>
  );
}
const estilo = StyleSheet.create({
  contenedor:{
    alignItems: "center",
    height:"100%"
  }
})
