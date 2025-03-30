import axios from 'axios';

const API_URL_NOVEDADES = 'http://192.168.1.77:8000/users/novedades'; 
const API_URL_AMBIENTE = 'http://192.168.1.77:8000/users';// Reemplaza con la URL real de tu API

export const crearNovedad = async (formData: any, token: string) => {
  try {
    const response = await axios.post(`${API_URL_NOVEDADES}/crear/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error al crear la novedad:', error.response?.data || error.message);
    throw error;
  }
}


export const obtenerNovedades = async (token: string) => {
    try 
    {
        const response = await axios.get(API_URL_NOVEDADES, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        return response.data;
    }
    catch(error : any)
    {
        console.error('Error al obtener las novedades', error.response?.data || error.message);
        throw error;
    }
}


/// ambientes xd

export const obtenerAmbientes = async () => {
    try {
      const response = await axios.get(`${API_URL_AMBIENTE}/ambientes/`);
      return response.data;
    } catch (error) {
      console.error('Error en la API:', error);
      return [];
    }
  };