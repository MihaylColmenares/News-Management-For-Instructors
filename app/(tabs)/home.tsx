import { StyleSheet, Image, Platform, Alert } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ScrollView, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { obtenerNovedades } from '@/api/novedades.api';
import { getToken } from '@/api/usuarios.api';
import { NovedadCard } from '@/components/NovedadCard';
import NavBar from '@/components/NavBarHome';
import React = require('react');
import { FontAwesome5 } from '@expo/vector-icons';


export default function NewsScreen() {

    const theme = useColorScheme();
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
            <NavBar />
            <ScrollView style={styles.scroll} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* Sección de novedades */}
                <View style={[styles.newsSection, theme == 'dark' ? styles.darkBox : styles.lightBox]}>
                    <View style={styles.newsIcon}>
                        <FontAwesome5 name="user" size={42} color="#00af00" solid/>
                    </View>
                    <Text style={styles.newsTitle}>Novedades</Text>
                    <Text style={styles.newsStatus}>
                    Sin aprobar  |  Con retraso  |  Aprobadas
                    </Text>
                
                    {novedades.map((novedad) => (
                            <NovedadCard 
                            key={novedad.id} 
                            title={novedad.titulo} 
                            image={`http://192.168.1.2:8000/${novedad.evidencia_fotografica}`}
                            fecha_inicio={novedad.fecha_inicio}
                            />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    darkBox: {
        backgroundColor: '#444444',
    },
    lightBox: {
        backgroundColor: '#222',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 33,
        padding: 10,
        gap: 20
    },
    scroll: {
        flex: 1,
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
    },
    newsSection: {
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    newsIcon: {
        borderWidth: 2,
        borderColor: '#00af00',
        width: 60,
        height: 60,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    newsStatus: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center',
    },
});