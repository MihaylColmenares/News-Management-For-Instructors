import { loginUser } from '@/api/usuarios.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router, Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, useColorScheme, Pressable, Alert } from 'react-native';



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
            <Text style={[style.title, theme == 'dark' ? style.darkText : style.lightText]}>News Management</Text>
            <View style={style.inputsContainer}>
                <View >
                    <Text style={[theme == 'dark' ? style.darkText : style.lightText]}>Username</Text>
                    <TextInput
                        style={[style.input, theme === 'dark' ? style.darkInput : style.lightInput]}
                        placeholder='Ingrese un usuario'
                        placeholderTextColor={theme === 'dark' ? '#fff' : '#000'}
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View>
                    <Text style={[theme == 'dark' ? style.darkText : style.lightText]}>Password</Text>
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
                    <Text style={style.darkText}>{loading ? 'Cargando...' : 'Ingresar'}</Text>
                </Pressable>
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
    container: {
        marginTop: 120,
        alignItems: 'center',
        gap: 120,
    },
    title: {
        fontSize: 28,
        color: '#fff',
    },
    darkText: {
        color: '#fff'
    },
    lightText: {
        color: '#000'
    },
    inputsContainer: {
        gap: 35,
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        textAlign: 'center'
    },
    darkInput: {
        borderColor: '#fff',
        color: '#fff'
    },
    lightInput: {
        borderBlockColor: '#000',
        color: '#000'
    },
    button: {
        backgroundColor: '#00af00',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
    }
});

export default Main