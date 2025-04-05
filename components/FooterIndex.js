import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';


const Footer = () => {
    const theme = useColorScheme();
    const [screen, setScreen] = useState('Home');
    const instagram = require('../assets/images/instagram-brands.png')
    const facebook = require('../assets/images/facebook-brands.png')
    const twitter = require('../assets/images/x-twitter-brands.png')
    const youtube = require('../assets/images/youtube-brands.png')

    const openLinkInstagram = () => {
        Linking.openURL('https://www.instagram.com/senacomunica/?hl=es-la');
    };
    const openLinkFacebook = () => {
        Linking.openURL('https://www.facebook.com/people/Cide-Soacha/61551393842722/?_rdr');
    };
    const openLinkTwitter = () => {
        Linking.openURL('https://x.com/senasoacha?lang=es');
    };
    const openLinkYoutube = () => {
        Linking.openURL('https://www.youtube.com/@CIDESoacha');
    };
    const openManual = () => {
        Linking.openURL('https://drive.google.com/file/d/1HvPpUadT8vtU8F-tAtQYgdnXOLdLUtPd/view?usp=sharing')
    }

    return (
    <View style={styles.container}>
      {/* Footer */}
        <View style={[styles.footer, theme == 'dark' ? styles.darkBox : styles.lightBox]}>
            <View style={styles.boxNetworks}>
                <TouchableOpacity onPress={openLinkInstagram}>
                    <FontAwesome5 name="instagram" size={28} color="#00af00"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkFacebook}>
                    <FontAwesome5 name="facebook" size={28} color="#00af00"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkTwitter}>
                    <FontAwesome5 name="twitter" size={28} color="#00af00"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={openLinkYoutube}>
                    <FontAwesome5 name="youtube" size={28} color="#00af00"/>
                </TouchableOpacity>
            </View>
            <Text style={[styles.footerCopy, theme == 'dark' ? styles.darkText : styles.lightText]}>© 2025 SENA</Text>
            <View style={[styles.boxAttention, theme == 'dark' ? styles.darkText : styles.lightText]}>
                <Text style={[styles.attentionTitle, theme == 'dark' ? styles.darkText : styles.lightText]}>Líneas de atención</Text>
                <Text style={[styles.attentionText, theme == 'dark' ? styles.darkText : styles.lightText]}>Bogotá: 3430111</Text>
                <Text style={[styles.attentionText, theme == 'dark' ? styles.darkText : styles.lightText]}>Resto del País:{'\n'}018000910270</Text>
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
    footer: {
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 17,
    },
    boxNetworks: {
        flexDirection: 'row',
        gap: 3,
        justifyContent: 'center',
        alignContent: 'center',
    },
    footerCopy: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    boxAttention: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    attentionTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    attentionText: {
        textAlign: 'center',
    },
});

export default Footer;