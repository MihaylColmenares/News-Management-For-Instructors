import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import NavBar from '@/components/NavBarHome';

export default function Regionales(){
    const theme = useColorScheme();
    return(
        <ScrollView>
            <View style={styles.container}>
            <NavBar />
                <View>
                    <Text style={[styles.title, theme == 'dark' ? styles.darkText : styles.lightText]}>REGIONALES</Text>
                </View>
                <View style={styles.container_reg}>
                    <Text style={[styles.title_regionales]}>Nombre</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>ANTIOQUIA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>ATLÁNTICO</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>BOGOTÁ D.C.</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>BOLÍVAR</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>BOYACÁ</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CALDAS</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CAQUETÁ</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CAUCA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CESAR</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CÓRDOBA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CHOCÓ</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>HUILA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>LA GUAJIRA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>MAGDALENA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>META</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>NARIÑO</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>NORTE DE SANTANDER</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>QUINDIO</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>RISARALDA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>SANTANDER</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>SUCRE</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>TOLIMA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>VALLE DEL CAUCA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>ARAUCA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>CASANARE</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>PUTUMAYO</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>ARCHIPIÉLAGO DE SAN ANDRÉS PROVIDENCIA Y SANTA CATALINA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>AMAZONAS</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>GUAINÍA</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>GUAVIARE</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>VAUPÉS</Text>
                    <Text style={[styles.item, theme == 'dark' ? styles.darkText : styles.lightText]}>VICHADA</Text>
                </View>
            </View>
            <Stack.Screen options={{
            headerShown: false
            }}/>
    </ScrollView>
);
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
    container:{
        alignItems: 'center',
        paddingTop: 33,
        gap: 16,
    },
    container_reg:{
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    item: {
        fontSize: 18,
        color: 'white',
        padding: 9,
        borderWidth: 1,
        width: 250,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginTop: -1
    },
    title_regionales:{
        marginBottom: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        padding: 9,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#00af00',
        width: 250,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    }
});