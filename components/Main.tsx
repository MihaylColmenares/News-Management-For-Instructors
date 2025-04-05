import { loginUser } from '@/api/usuarios.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router, Stack } from 'expo-router';
import { useState } from 'react';
import React = require('react');
import { StyleSheet, View, Text, TextInput, useColorScheme, Pressable, Alert, TouchableOpacity,  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';



function Main() {
    const theme = useColorScheme();
    const [pressed, setPress] = useState(false)

    const handlePress = () => setPress(true)
    const handlePressOut = () => setPress(false)

    /// usuarios codigo ///

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Error', 'Por favor, ingrese usuario y contraseña');
            return;
        }

        setLoading(true);

        try {
            const data = await loginUser(username, password);
            Alert.alert('Éxito', 'Inicio de sesión exitoso');

            router.push('/home'); // Redirigir al perfil
        } catch (error: any) {
            Alert.alert('Error', error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <View style={style.container}>
            {/* esto se mete en un array y se muestra los estilos del titulo + estilos segun el tema del dispositivo*/}
            <TouchableOpacity onPress={() => router.replace("/")} style={[style.buttonRegresar]}>
                <FontAwesome5 name="arrow-left" size={20} color="#black" style={theme == 'dark' ? style.darkText : style.lightText}/>
                <Text style={[style.textoVolver, theme == 'dark' ? style.darkText : style.lightText]}> Volver </Text>
            </TouchableOpacity>
            <Text style={[style.title, theme == 'dark' ? style.darkText : style.lightText]}>Ingresa a News Management</Text>
            <View style={style.inputsContainer}>
                <View>
                    <Text style={[theme == 'dark' ? style.darkText : style.lightText]}>Username:</Text>
                    <TextInput
                        style={[style.input, theme === 'dark' ? style.darkInput : style.lightInput]}
                        placeholder='Ingrese un usuario'
                        placeholderTextColor={theme === 'dark' ? '#fff' : '#000'}
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View>
                    <Text style={[theme == 'dark' ? style.darkText : style.lightText]}>Password:</Text>
                    <TextInput
                        style={[style.input, theme === 'dark' ? style.darkInput : style.lightInput]}
                        placeholder='Ingrese un usuario'
                        placeholderTextColor={theme === 'dark' ? '#fff' : '#000'}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <Pressable
                    onPress={handleLogin}
                    style={({ pressed }) => [
                        style.button,
                        { opacity: pressed ? 0.5 : 1 }
                    ]}
                    disabled={loading}
                >
                    <Text style={style.darkText}>{loading ? 'Cargando...' : 'Iniciar Sesión'}</Text>
                </Pressable>
            </View>
            <View style={style.boxRegister}>
                <Text style={theme == 'dark' ? style.darkText : style.lightText}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => router.push("/register")}>
                    <Text style={[style.textRegister, theme == 'dark' ? style.darkText : style.lightText]}>Registrate Aquí</Text>
                </TouchableOpacity>
            </View>

            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
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
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30,
        gap: 20,
    },
    buttonRegresar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoVolver:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputsContainer: {
        gap: 35,
    },
    input: {
        borderWidth: 1,
        padding: 13,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#00AF00',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    boxRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:6,
    },
    textRegister: {
        fontWeight: 'bold',
    },
});

export default Main