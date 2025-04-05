import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import NavBar from '@/components/NavBarHome';

export default function Sedes(){
    const theme = useColorScheme();
    return(
    <View style={styles.cuerpo}>
        <NavBar />
        <Text style={[styles.titulo_prin, theme == 'dark' ? styles.darkText : styles.lightText]}>SEDES</Text>
            <ScrollView horizontal={true}>
            <View>
                <View style={styles.contenedor}>
                    <View>
                        <Text style={styles.titulo}>NOMBRE</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Cide Soacha</Text>
                    </View>
                    <View>
                        <Text style={styles.titulo}>DIRECCIÓN</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>cl13</Text>
                    </View>
                    <View>
                        <Text style={styles.titulo}>CENTRO DE FORMACIÓN</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro Industrial y de Desarrollo Empresarial de Soacha</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <Stack.Screen options={{
            headerShown: false
            }}/>
    </View>
    )
}

const styles = StyleSheet.create({
    darkText: {
        borderColor: '#ddd',
        color: '#fff'
    },
    lightText: {
        borderColor: '#ddd',
        color: '#000'
    },
    darkInput: {
        borderColor: '#ddd',
        color: '#fff'
    },
    lightInput: {
        borderColor: '#ddd',
        color: '#000'
    },
    cuerpo:{
        padding: 20,
        flex: 1,
        gap: 16
    },
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    titulo_prin: {
        textAlign: 'center',
        fontSize: 29,
        fontWeight: 'bold'
    },
    titulo:{
        padding: 6,
        backgroundColor: '#00AF00',
        borderWidth: 1,
        borderColor: '#ddd',
        color: 'white',
        textAlign: 'center',
    },
    campos:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding:8,
        textAlign: 'center',
    }
})