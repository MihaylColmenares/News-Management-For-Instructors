import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import NavBar from '@/components/NavBarHome';

export default function Centros(){
    const theme = useColorScheme();
    return(
    <View style={styles.cuerpo}>
        <NavBar />
        <Text style={[styles.titulo_prin, theme == 'dark' ? styles.darkText : styles.lightText]}>Centros de formación</Text>
            <ScrollView horizontal={true}>
            <View>
                <View style={styles.contenedor}>
                    <View>
                        <Text style={styles.titulo}>NOMBRE</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro de la Tecnología de Diseño y la Productividad Empresarial</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro de Biotecnología Agropecuaria</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro Agroecológico y Empresarial</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro de Desarrollo Agroempresarial</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro de Desarrollo Agroindustrial y Empresarial</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Centro Industrial y de Desarrollo Empresarial de Soacha</Text>
                    </View>
                    <View>
                        <Text style={styles.titulo}>DIRECCIÓN</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Cra. 10 No. 30 – 04</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Kilometro 7 Vía Mosquera</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Avenida Manuel Humberto Cardenas calle 16</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Vereda Bojacá Carrera 11 Sector el Darien Lote 1 Chia</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Calle 2 No. 13 – 03 Barrio San Rafael</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>Clle 13 No. 10 -60</Text>
                    </View>
                    <View>
                        <Text style={styles.titulo}>NIT</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>17704</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>17850</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>17552</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>18051</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>17350</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>18000</Text>
                    </View>
                    <View>
                        <Text style={styles.titulo}>REGIONAL</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
                        <Text style={[styles.campos, theme == 'dark' ? styles.darkText : styles.lightText]}>CUNDINAMARCA</Text>
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
    cuerpo:{
        padding: 20,
        flex: 1,
        paddingTop: 33,
        gap: 16,
    },
    contenedor: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
