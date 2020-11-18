import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import firebase  from '../utils/firebase';
import "firebase/firestore";
// para dispositivo android
firebase.firestore().settings({experimentalForceLongPolling: true});
// para iniciar la base de datos
const db = firebase.firestore();
export default function NuevoCumpleaniero() {
    const [formDato, setFormDato] = useState({});
    const [formError, setFormError] = useState({});
    const [ esVisible, setEsVisible] = useState(false);
    const ocultaDatePicker = () =>{
        setEsVisible(false);
    }
    const confirmar = (fecha) =>{
        const fechaCump = fecha;
        fechaCump.setHours(0);
        fechaCump.setMinutes(0);
        fechaCump.setSeconds(0);
        setFormDato({...formDato, fechaCump});
        ocultaDatePicker();
    }
    const mostrarDatePicker = () =>{
        setEsVisible(true);
    }
    const metodoCapturar = ( e, tipo) =>{
        setFormDato({...formDato, [tipo]: e.nativeEvent.text});
    }
    const guardar = () =>{
        let error ={};
        if(!formDato.nombre  || !formDato.apellido  || !formDato.fechaCump){
            if(!formDato.nombre ) error.nombre = true;
            if(!formDato.apellido) error.apellido = true;
            if(!formDato.fechaCump) error.fechaCump = true;
        }else{
            console.log("Guardado");
            const informacion= formDato;
            informacion.fechaCump.setYear(0);
            console.log(informacion);
            db.collection("cumple")
              .add(informacion)
              .then(() => {
                  console.log("Guardo con exito!!! ");
              })
              .catch((error) => {
                    console.log("Error!!!", error);
              })
        }
        setFormError(error);
    }
  return (
      <>
        <View style={estilo.contenido}>
            <TextInput 
                style={[estilo.input, formError.nombre && {borderColor:'#f05545'}]}
                placeholder="Nombres"
                placeholderTextColor="#969696"
                onChange = {((e) => metodoCapturar(e, "nombre"))}
                />
            <TextInput 
                style={[estilo.input, formError.apellido && {borderColor:'#f05545'}]}
                placeholder="Apellidos"
                placeholderTextColor="#969696"
                onChange = {((e) => metodoCapturar(e, "apellido"))}
                />
            <View style={[estilo.input, estilo.datePicker, formError.fechaCump && {borderColor:'#f05545'}]}>
                <Text 
                    style={{color: formDato.fechaCump ? "#fff" : "#969696"}} 
                    onPress={mostrarDatePicker}>
                    {
                        formDato.fechaCump
                        ? moment(formDato.fechaCump).format("LL")
                        : 'Fecha de Nacimiento'
                    }
                </Text>
            </View>
            <Button title="Guardar" onPress={guardar}/>
        </View>
        <DateTimePickerModal
            isVisible={esVisible}
            mode="date"
            onConfirm={confirmar}
            onCancel={ocultaDatePicker}
        />
      </>
        
  );
}
const estilo = StyleSheet.create({
    contenido:{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
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
    datePicker:{
        justifyContent: 'center'
    },
    texto:{
        color:"#969696",
        fontSize:18
    }
})
