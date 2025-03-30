import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = 'http://192.168.1.77:8000/users'; // activar el server local en la api para que funcione

// funcion para hacer log in
export const loginUser = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, {
            username,
            password
        });
        // Guardar el token en AsyncStorage (opcional)
        await AsyncStorage.setItem('token', response.data.token);
        // await AsyncStorage.setItem('token', response.data.token);

        return response.data
    } catch (error: any) {
        throw error.response?.data?.error || 'Error en el servidor';
    }
};


export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        return token;
    } catch (error: any){
        throw 'al obtener el token servidor';
    }
}

// 📌 Función para obtener los datos del usuario autenticado
export const getUserData = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/profile/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        console.error("Error al obtener datos del usuario:", error.response?.data || error.message);
        throw error.response?.data?.error || 'Error al obtener los datos';
    }
};


export const updateUserData = async (token: string, updatedData: any) => {
    try {
        const response = await axios.put(`${API_URL}/profile/update/`, updatedData, {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error: any) {
        console.error('Error al actualizar usuario:', error.response?.data || error.message);
        throw error.response?.data || 'Error al actualizar usuario';
    }
};


export const updateProfilePhoto = async (imageUri: string, token: string) => {
    try {

        const formData = new FormData();
        formData.append('foto_perfil', {
            uri: imageUri,
            name: 'profile.jpg',
            type: 'image/jpeg',
        } as any); // 👈 Esto evita el error de TypeScript

        const response = await axios.put(`${API_URL}/profile/update-photo/`, formData, {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error: any) {
        console.error('Error al actualizar foto de perfil:', error.response?.data || error.message);
        throw error.response?.data || 'Error al actualizar la foto de perfil';
    }
};