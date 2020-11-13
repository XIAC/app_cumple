import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import firebase from '../utils/firebase';
export default function SeccionBotones( props) {
    console.log(props);
    const { mostrarLista, setMostrarLista} = props;
  return (
    <View style={estilo.posicionBotones}>
        <View style={estilo.cerrar}>
            <Text style={estilo.texto} onPress={()=> firebase.auth().signOut()}>Cerrar Sesion</Text>
        </View>
        <View style={estilo.nuevo}>
            <Text 
                style={estilo.texto} 
                onPress={()=> setMostrarLista(!mostrarLista)} >
                { mostrarLista 
                    ? "Nuevo cumpleañero" 
                    : "Cancelar"}
            </Text>
        </View>
    </View>
  );
}
const estilo = StyleSheet.create({
    posicionBotones:{
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        marginBottom:20
    }, 
    cerrar:{
        backgroundColor: "#d50000",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:30
    },
    nuevo:{
        backgroundColor: "#3d5afe",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:30
    },
    texto:{
        color:"#fff",
        fontSize: 16,
        textAlign:"center"
    }
})
