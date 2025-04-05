import { useNavigation } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';


const NavBar = () => {
    const theme = useColorScheme();
    const router = useRouter();
    const navigation = useNavigation();
    const logo = require('../assets/images/news_management.png');
    const lupa = require('../assets/images/magnifying-glass-solid (1).png')

    return (
        <View style={styles.container}>
        {/* Barra de navegación */}
            <View style={[styles.navBar, theme == 'dark' ? styles.darkBox : styles.lightBox]}>
                <TouchableOpacity onPress={() => router.replace("/")}>
                    <Image source={logo} style={{width: 60, height: 60}}/>
                </TouchableOpacity>
                <View style={styles.boxButtons}>
                <TouchableOpacity onPress={() => router.push("about")} style={styles.navButton}>
                    <Text style={[styles.navText, theme == 'dark' ? styles.darkText : styles.lightText]}>¿Quiénes somos?</Text>
                    <FontAwesome5 name="search" size={20} style={theme == 'dark' ? styles.darkText : styles.lightText} />
                </TouchableOpacity>
                <View style={styles.login}>
                    <TouchableOpacity onPress={() => router.push("/login")} style={styles.navButton}>
                        <Text style={[styles.navText, theme == 'dark' ? styles.darkText : styles.lightText]}>Ingresar</Text>
                    </TouchableOpacity>
                    <Text style={[styles.navText, theme == 'dark' ? styles.darkText : styles.lightText]}>|</Text>
                    <TouchableOpacity onPress={() => router.push("register")} style={styles.navButton}>
                        <Text style={[styles.navText, theme == 'dark' ? styles.darkText : styles.lightText]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>

            <Stack.Screen options={{
                headerShown: false
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    darkText: {
        color: '#fff'
    },
    lightText: {
        color: '#000'
    },
    darkBox: {
        backgroundColor: '#222',
    },
    lightBox: {
        backgroundColor: '#fff',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: 10,
        padding: 10,
    },
    boxButtons: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    navText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
    },
    login: {
        flexDirection: 'row',
        gap: 8,
    },
});

export default NavBar;