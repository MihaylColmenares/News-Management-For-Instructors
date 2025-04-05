import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, useColorScheme } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { getUserData, updateUserData, updateProfilePhoto, getToken } from '@/api/usuarios.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfileScreen() {
    const theme = useColorScheme();
    const [loading, setLoading] = useState(true);
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            num_doc: '',
            ficha: '',
        },
    });

    useEffect(() => {
        loadUserProfile();
    }, []);

    const loadUserProfile = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                Alert.alert('Error', 'No se encontró el token');
                return;
            }
    
            const data = await getUserData(token);
            if (!data || !data.username) {
                throw new Error(`Datos de usuario no disponibles. Respuesta recibida: ${JSON.stringify(data)}`);
            }
    
            setValue('username', data.username || '');
            setValue('email', data.email || '');
            setValue('first_name', data.first_name || '');
            setValue('last_name', data.last_name || '');
            setValue('num_doc', data.num_doc || '');
            setValue('ficha', data.ficha || '');
            setProfilePhoto(`http://192.168.1.77:8000${data.foto_perfil}`);
    
        } catch (error) {
            console.error('❌ Error al cargar perfil:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (data: any) => {
        try {
            const token = await getToken();
    
            if (!token) {
                Alert.alert('Error', 'No se encontró el token de autenticación');
                return;
            }
    
            await updateUserData(token, data);
            Alert.alert('Éxito', 'Perfil actualizado correctamente');
        } catch (error) {
            console.error('❌ Error al actualizar perfil:', error);
            Alert.alert('Error', 'No se pudo actualizar el perfil');
        }
    };
    
    const handleUpdateProfilePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            try {
                const token = await getToken();
                if (!token) {
                    console.log("No se encontró un token, redirigiendo...");
                    setLoading(false);
                    return; // Salimos de la función si no hay token
                  }
                await updateProfilePhoto(result.assets[0].uri, token);
                setProfilePhoto(result.assets[0].uri);
                Alert.alert('Éxito', 'Foto de perfil actualizada');
            } catch (error) {
                console.error('Error al actualizar foto:', error);
                Alert.alert('Error', 'No se pudo actualizar la foto de perfil');
            }
        }
    };

    

    if (loading) {
        return <ActivityIndicator size="large" color="#9fd700" />;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: profilePhoto || 'https://i.pinimg.com/736x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg' }} style={styles.profileImage} />
            <TouchableOpacity style={styles.button} onPress={handleUpdateProfilePhoto}>
                <Text style={{color: '#fff'}}>Cambiar foto</Text>
            </TouchableOpacity>

            <Controller control={control} name="username" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Nombre de usuario" value={field.value} onChangeText={field.onChange} />
            )} />
            <Controller control={control} name="email" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Correo" keyboardType="email-address" value={field.value} onChangeText={field.onChange} />
            )} />
            <Controller control={control} name="first_name" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Nombre" value={field.value} onChangeText={field.onChange} />
            )} />
            <Controller control={control} name="last_name" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Apellido" value={field.value} onChangeText={field.onChange} />
            )} />
            <Controller control={control} name="num_doc" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Número de documento" keyboardType="numeric" value={field.value} onChangeText={field.onChange} />
            )} />
            <Controller control={control} name="ficha" render={({ field }) => (
                <TextInput style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]} placeholder="Ficha" value={field.value} onChangeText={field.onChange} />
            )} />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleUpdate)}>
                <Text style={{color: '#fff'}}>Guardar cambios</Text>
            </TouchableOpacity>
            
        </View>
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
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#00af00',
        padding: 10,
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 10
    }
});
