import { StyleSheet, Image, Platform, Alert } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { obtenerNovedades } from '@/api/novedades.api';
import { getToken } from '@/api/usuarios.api';
import { NovedadCard } from '@/components/NovedadCard';


export default function NewsScreen() {

    const [novedades, setNovedades ] = useState<{ id: number; titulo: string; evidencia_fotografica: any; fecha_inicio: any;}[]>([]);
     
    useFocusEffect(
        useCallback(() => {
            async function loadNews() {
                try {
                    const token = await getToken();
                    if (!token) {
                        Alert.alert('Error', 'Debes iniciar sesión');
                        return;
                    }
                    const res = await obtenerNovedades(token);
                    setNovedades(res);
                    console.log(res); // Verificar respuesta
                } catch (error: any) {
                    console.error('No se pudo obtener las novedades', error);
                }
            }
            loadNews();
        }, [])
    );



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href='/createNovedad' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Novedad ambiente +</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <ScrollView>
                {novedades.map((novedad) => (
                        <NovedadCard 
                        key={novedad.id} 
                        title={novedad.titulo} 
                        image={`http://192.168.1.77:8000/${novedad.evidencia_fotografica}`}
                        fecha_inicio={novedad.fecha_inicio}
                        />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20
    },
    button: {
        backgroundColor: '#00af00',
        padding: 10,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff'
    },
    header: {
        justifyContent: 'flex-start'
    }
});