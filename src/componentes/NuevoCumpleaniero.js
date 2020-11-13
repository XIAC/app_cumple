import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
export default function NuevoCumpleaniero() {
    const [formDato, setFormDato] = useState({});
    const [ esVisible, setEsVisible] = useState(false);
    const ocultaDatePicker = () =>{
        setEsVisible(false);
    }
    const confirmar = (fecha) =>{
        // console.log(moment(fecha).format("LL"));
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
        console.log("Guardado",formDato );
    }
  return (
      <>
        <View style={estilo.contenido}>
            <TextInput 
                style={estilo.input}
                placeholder="Nombres"
                placeholderTextColor="#969696"
                onChange = {((e) => metodoCapturar(e, "nombre"))}
                />
            <TextInput 
                style={estilo.input}
                placeholder="Apellidos"
                placeholderTextColor="#969696"
                onChange = {((e) => metodoCapturar(e, "apellido"))}
                />
            <View style={[estilo.input, estilo.datePicker]}>
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
