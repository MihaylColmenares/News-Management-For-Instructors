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
        await AsyncStorage.setItem('authToken', response.data.token);
        // await AsyncStorage.setItem('token', response.data.token);

        return response.data
    } catch (error: any) {
        throw error.response?.data?.error || 'Error en el servidor';
    }
};

// 📌 Función para obtener los datos del usuario autenticado
export const getUserData = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/me/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        throw error.response?.data?.error || 'Error al obtener los datos';
    }
};

export const fetchUserProfile = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) throw 'No hay token disponible';

        const userData = getUserData(token);
        return userData;

    } catch (error: any) {
        console.log('Error al obtener el perfil:', error);
        throw error;
    }
}