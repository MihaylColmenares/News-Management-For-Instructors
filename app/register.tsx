import React from 'react';
import { View, Text, TextInput, StyleSheet, useColorScheme,TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';


export default function HomeScreen() {
    const theme = useColorScheme();
    const router = useRouter();
    const [selectedValue, setSelectedValue] = useState('CC');
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };


return (
    <ScrollView style={styles.scroll}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.replace("/")} style={styles.buttonRegresar}>
                <FontAwesome5 name="arrow-left" size={20} color="#black" style={theme == 'dark' ? styles.darkText : styles.lightText}/>
                <Text style={styles.textoVolver}> Volver </Text>
            </TouchableOpacity>
            <Text style={[styles.title_prin, theme == 'dark' ? styles.darkText : styles.lightText]}>Registrarse a News Management</Text>
            
            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Nombre</Text>
            <TextInput style={styles.input} />

            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Apellido</Text>
            <TextInput style={styles.input} />

            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Tipo de Documento</Text>
            <View style={styles.pickerContainer}>
                <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="CC" value="CC" />
                <Picker.Item label="TI" value="TI" />
                <Picker.Item label="CE" value="CE" />
                </Picker>
            </View>

            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Número de Documento</Text>
            <TextInput style={styles.input} placeholder="#" />

            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Correo Soy Sena</Text>
            <TextInput style={styles.input} />

            <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>Contraseña</Text>
            <TextInput style={styles.input} 
            secureTextEntry={true}/>

            <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheck}>
                <Text style={styles.checkbox}>{isChecked ? '✔️' : '⬜'}</Text>
                <Text style={[theme == 'dark' ? styles.darkText : styles.lightText]}>
                Aceptar los Términos y Condiciones del Sena
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => console.log('Registrado')}>
                <Text style={styles.textoBoton}>Registrarse</Text>
            </TouchableOpacity>
            <Stack.Screen options={{
                headerShown:false
            }}/>
        </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
    darkText: {
        color: '#fff'
    },
    lightText: {
        color: '#000'
    },
    darkInput: {
        borderColor: '#fff',
        color: '#fff'
    },
    lightInput: {
        borderBlockColor: '#000',
        color: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 30,
        gap: 20,
    },
    scroll: {
        flex: 1,
        paddingTop: 10,
    },
    title_prin: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    titulo: {
        marginTop: 20,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        padding: 13,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    pickerContainer: {
        borderWidth: 1,
        padding: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    checkbox: {
        fontSize: 20,
        marginRight: 10,
    },
    terminos: {
        fontSize: 14,
    },
    boton: {
        backgroundColor: '#00AF00',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonRegresar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonImage:{
        width: 30,
        height: 34,
        marginEnd: 7
    },
    textoVolver:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});