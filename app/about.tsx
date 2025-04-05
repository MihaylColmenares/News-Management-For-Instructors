import { Image, StyleSheet, View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import NavBar from "../components/NavBarIndex";
import Footer from "../components/FooterIndex";

export default function HomeScreen() {
    const logo = require('../assets/images/news_management.png');
    const check = require('../assets/images/list-check-solid.png');
    const eye = require('../assets/images/eye-solid.png');
    const github = require('../assets/images/github.png');
    const openlinkDeiby = () => {
        Linking.openURL('https://github.com/DeibyRamos123');
    }
    const openlinkMyhail = () => {
        Linking.openURL('https://github.com/MihaylColmenares');
    }
    const openlinkSaganome = () => {
        Linking.openURL('https://github.com/thssgas');
    }
    const openlinkKamilo = () => {
        Linking.openURL('https://github.com/kmiloxd');
    }
    const openlinkDiego = () => {
        Linking.openURL('https://github.com/RuizAlejo545');
    }
    const openlinkStiven = () => {
        Linking.openURL('https://github.com/EstivenPerez');
    }
    const openlinkJhan = () => {
        Linking.openURL('https://github.com/jhanherrera');
    }
    const openlinkDuan = () => {
        Linking.openURL('https://github.com/Duansito');
    }

    return (
        <ScrollView style={styles.scroll}>
        <NavBar />
        <View style={styles.container}>
        <View style={styles.contenedor}>
            <Text style={styles.title}>SOBRE NOSOTROS</Text>
            <Text style={styles.text}>Somos una aplicacion intuitiva y adaptable con el objetivo de gestionar las novedades que se puedan presentar durante la Formacion Integral Profesional en el SENA, agilizando tramites, educiendo tiempos y eliminando el uso de papel. Esta diseñada para ajustarse a las necesidades del SENA y ser facil de usar tanto para aprendices como para el personal Administrativo, promoviendo procesos mas rapidos, digitales y ecologicos</Text>
            <Image source={logo} style={{width:150, height:150}}/>
        </View>

        <View style={styles.contenedor}>
            <Text style={styles.title}>MISION</Text>
            <Text style={styles.text}>Nuestra mision es transformar la gestion de novedades en el ambito educativo mediante una aplicacion y una pagina web integradas. Facilitamos el registro, seguimiento y organizacion de reportes relacionados academica, convivencia o daños en las instituciones, garantizado seguridad y orden. Ademas, proporcionamos informes claros que contribuyen a mejorar la gestion de las instituciones educativas</Text>
            <Image source={check} style={{width:150, height:150}}/>
        </View>

        <View style={styles.contenedor}>
            <Text style={styles.title}>VISION</Text>
            <Text style={styles.text}>Ser una empresa reconocida debido a nuestro software eficiente en la solicitud de la gestion de novedades con un sistema agradable a la vista, garantizado un buen funcionamiento</Text>
            <Image source={eye} style={{width:170, height:150}}/>
        </View>

        <View style={styles.contenedor}>
            <Text style={styles.title}>NUESTRO EQUIPO DE DESARROLLO</Text>
            
            <TouchableOpacity style={styles.box} onPress={openlinkDeiby}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Deiby Ramos</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkMyhail}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}> Mihayl Colmenares</Text>
                    <Image source={github} style={{width:50, height:50}}/>      
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkSaganome}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Santiago Saganome</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkKamilo}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Kamilo Caldas</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkDiego}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Diego Lavacude</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkStiven}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Estiven Perez</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkJhan}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Jhan Herrera</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={openlinkDuan}>
                <View style={styles.equipo}>
                    <Text style={styles.nom}>Duan Zapata</Text>
                    <Image source={github} style={{width:50, height:50}}/>
                </View>
            </TouchableOpacity>

            </View>


            <Stack.Screen options={{
                headerShown: false
            }}/>
            </View>
            <View style={{ marginBottom: 34 }}>
                <Footer />
            </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    scroll:{
        flex: 1,
        paddingTop: 33,
    },
    title:{
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
    },
    text:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: 260,
    },
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        padding: 30,
        gap: 20,
    },
    contenedor: {
        width: 300,
        backgroundColor: '#00af00',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        borderRadius: 10,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    equipo: {
        width: 250,
        height: 'auto',
        backgroundColor: '#d9f8d0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        borderRadius: 10,
    },
    nom: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    }
});
