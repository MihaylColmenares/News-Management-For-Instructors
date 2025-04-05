import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert, StyleSheet, useColorScheme } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { crearNovedad } from '@/api/novedades.api';
import { Picker } from '@react-native-picker/picker';  // Picker externo
import { obtenerAmbientes } from '@/api/novedades.api'; // API para obtener ambientes
import { getToken } from '@/api/usuarios.api';

const CrearNovedadScreen = () => {
  const theme = useColorScheme();
  const [imagen, setImagen] = useState<string | null>(null);
  const [ambientes, setAmbientes] = useState<{ id: number; sede: string; numero: string }[]>([]);
  const [ambienteSeleccionado, setAmbienteSeleccionado] = useState<number | null>(null);

  useEffect(() => {
    const cargarAmbientes = async () => {
      try {
        const data = await obtenerAmbientes();
        setAmbientes(data);
      } catch (error) {
        console.error('Error cargando ambientes', error);
      }
    };
    cargarAmbientes();
  }, []);

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required('El título es obligatorio'),
    descripcion: Yup.string().required('La descripción es obligatoria'),
    ambiente: Yup.number().required('Selecciona un ambiente'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      titulo: '',
      descripcion: '',
      ambiente: undefined,
    },
  });

  const seleccionarImagen = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const tomarFoto = async () => {
    let resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const token = await getToken();
      if (!token) {
        Alert.alert('Error', 'Debes iniciar sesión');
        return;
      }

      let formData = new FormData();
      formData.append('titulo', data.titulo);
      formData.append('descripcion', data.descripcion);
      formData.append('ambiente', data.ambiente.toString());

      if (imagen) {
        formData.append('evidencia_fotografica', {
          uri: imagen,
          name: `evidencia_${Date.now()}.jpg`, // Nombre único
          type: 'image/jpeg',
        } as any);
      }

      await crearNovedad(formData, token);
      Alert.alert('Éxito', 'Novedad creada correctamente');
      reset();
      setImagen(null);
      setAmbienteSeleccionado(null);
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear la novedad');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, theme == 'dark' ? styles.darkText : styles.lightText]}>Datos de la Novedad de Ambiente</Text>
      <Text style={[styles.label, theme == 'dark' ? styles.darkText : styles.lightText]}>Título:</Text>
      <Controller
        control={control}
        name="titulo"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.titulo && styles.inputError, theme == 'dark' ? styles.darkText : styles.lightText]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.titulo && <Text style={styles.errorText}>{errors.titulo.message}</Text>}

      <Text style={[styles.label, theme == 'dark' ? styles.darkText : styles.lightText]}>Descripción:</Text>
      <Controller
        control={control}
        name="descripcion"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, styles.textArea, errors.descripcion && styles.inputError, theme == 'dark' ? styles.darkText : styles.lightText]}
            multiline
            numberOfLines={4}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      {errors.descripcion && <Text style={styles.errorText}>{errors.descripcion.message}</Text>}

      <Text style={[styles.label, theme == 'dark' ? styles.darkText : styles.lightText]}>Selecciona un ambiente:</Text>
      <Controller
        control={control}
        name="ambiente"
        render={({ field: { onChange, value } }) => (
          <View style={styles.pickerContainer}>
            <Picker 
            selectedValue={value ?? undefined} // Asegura que no sea null
            onValueChange={(itemValue) => {
                onChange(itemValue); // Actualiza React Hook Form
                setAmbienteSeleccionado(itemValue); // También actualiza el estado local
            }}
            style={[styles.picker]}
            >
            <Picker.Item label="Seleccione un ambiente" value={undefined} style={theme == 'dark' ? styles.darkText : styles.lightText} />
            {ambientes.map((ambiente) => (
                <Picker.Item key={ambiente.id} label={`${ambiente.sede } (${ambiente.numero})`} value={ambiente.id} style={[styles.picker]}/>
            ))}
            </Picker>
            </View>
        )}
        />
      {errors.ambiente && <Text style={styles.errorText}>{errors.ambiente.message}</Text>}

      <TouchableOpacity onPress={seleccionarImagen} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Seleccionar imagen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={tomarFoto} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>Tomar foto</Text>
      </TouchableOpacity>

      {imagen && <Image source={{ uri: imagen }} style={styles.imagePreview} />}

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={[styles.button, isSubmitting && styles.buttonDisabled]} disabled={isSubmitting}>
        <Text style={styles.buttonText}>Crear Novedad</Text>
      </TouchableOpacity>
    </View>
  );
};

// 🎨 Estilos
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
    marginTop: 33,
    padding: 20,
    flex: 1,
    gap: 14,
  },
  title:{
    fontSize: 26,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  picker: {
    padding: 1,
    borderRadius: 5,
  },
  imageButton: {
    backgroundColor: '#00AF00',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  imageButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imagePreview: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#00AF00',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CrearNovedadScreen;
