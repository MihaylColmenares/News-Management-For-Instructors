import React from 'react'
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';

interface NovedadCardProps {
    title: string;
    // Añade aquí otras propiedades que necesites
    image?: string;// El ? indica que es opcional
    fecha_inicio?: any
    // etc...
}

export function NovedadCard({ title, image, fecha_inicio}: NovedadCardProps) {

    const theme = useColorScheme();

    return (
    <View style={[style.container, theme == 'dark' ? style.darkBox : style.lightBox]}>
        <Text style={style.Titulo}>{title}</Text>
        <Image source={{
            uri: image
        }} style={{ width: 255, height: 255, borderRadius: 3}} />
        <Text style={style.FechaInicio}>{fecha_inicio}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    darkBox: {
        backgroundColor: '#222',
    },
    lightBox: {
        backgroundColor: '#444444',
    },
    Titulo:  {
        fontSize: 28,
        color: '#fff'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 20,
        backgroundColor: '#0D1F23',
        borderRadius: 15,
        marginTop: 5,
    },
    FechaInicio: {
        color: '#fff',
        fontSize: 16,
    }
})

