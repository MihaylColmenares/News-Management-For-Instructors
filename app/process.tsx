import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link, Stack, useRouter } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import NavBar from '@/components/NavBarHome';


export default function HomeScreen() {
    const [selectedValue, setSelectedValue] = useState('ficha');
    const arrow = require('../assets/images/arrow.png');
    const router = useRouter();
    const user = require('../assets/images/user.png');
    
    return (

    <View style={styles.container}>
        <NavBar />
        <View style={styles.presen}>
            <View  style={styles.use}>
                <FontAwesome5 name="user" size={24} color="#00AF00" solid/>
                <Text style={styles.text}>Seguimiento</Text>
            </View>
        </View>

        <View style={styles.form}>
            <Text style={styles.title}>Ficha:</Text>
            <Picker style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="-------------" value="----" />
                <Picker.Item label="CIDE 246575" value="Ficha" />
                <Picker.Item label="Sibaté 545643" value="Ficha_2" />
                <Picker.Item label="CIDE 3245465" value="Ficha_3" />
            </Picker>

            <Text style={styles.title}>Aprendiz:</Text>
            <Picker style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="-------------" value="----" />
                <Picker.Item label="pepe Gonzales" value="Ficha" />
                <Picker.Item label="Ricardo Quevedo" value="Ficha_2" />
                <Picker.Item label="Mario Casiblanco" value="Ficha_3" />
            </Picker>

            <Text style={styles.title}>Tipo de Novedad:</Text>
            <Picker style={styles.picker}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item style={styles.pickerIt} label="-------------" value="----" />
                <Picker.Item label="Todos" value="Novedad" />
                <Picker.Item label="Ambiente" value="Novedad_2" />
                <Picker.Item label="Diciplinaria" value="Novedad_3" />
                <Picker.Item label="Academica" value="Novedad_4" />
            </Picker>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>Filtrar</Text>
            </TouchableOpacity>
            
        </View>
    
    <Stack.Screen options={{
        headerShown: false
    }}/>

    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 30,
        gap: 20,
        marginTop: 40
    },
    presen: {
        width: 300,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 70
    },
    text: {
        color: '#fff',
        fontSize: 17
    },
    use: {
        height: 'auto',
        flexDirection: 'row',
        gap: 10
    },
    boxBack:{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
    picker: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
    },
    pickerIt: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    form: {
        width: 300,
        height: 'auto',
        alignItems: 'center',
        gap: 12,
        margin: 15,
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#00af00',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55,
        margin: 20
    }
});