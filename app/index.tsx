import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, ScrollView, useColorScheme } from 'react-native';
import NavBar from "../components/NavBarIndex";
import Footer from "../components/FooterIndex";
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { Dimensions, StatusBar } from 'react-native';

const App = () => {
  const theme = useColorScheme();
  const router = useRouter();
  const windowHeight = Dimensions.get('window').height;
  const statusBarHeight = StatusBar.currentHeight || 0;
  const navbarHeight = 50;
  const footerHeight = 50;
  const availableHeight = windowHeight - statusBarHeight - navbarHeight - footerHeight;

  const openManual = () => {
    Linking.openURL('https://drive.google.com/file/d/1HvPpUadT8vtU8F-tAtQYgdnXOLdLUtPd/view?usp=sharing');
  };

  return (
    <View style={[styles.container, theme == 'dark' ? styles.darkBox : styles.lightBox]}>
      <NavBar />
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.welcome, { minHeight: availableHeight }]}>
          <Text style={styles.welcomeTitle}>Gestiona ahora las novedades de la FPI de mejor manera</Text>
          <Text style={styles.welcomeText}>
            Gestiona las novedades de la formación profesional integral de una forma automatizada y con menos periodos de tiempo en ser resueltas
          </Text>
          <View style={styles.welcomeButtons}>
            <TouchableOpacity onPress={() => router.push('/login')} style={styles.welcomeButtonAbout}>
              <Text style={styles.aboutText}>COMENZAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openManual} style={styles.welcomeButtonManual}>
              <Text style={styles.manualText}>MANUAL</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.networks, theme == 'dark' ? styles.darkBox : styles.lightBox]}>
          <WebView
            source={{ uri: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122198855744046461%26id%3D61551393842722&show_text=true&width=500" }}
            style={{ width: '100%', height: 220 }}
          />

          <WebView
            source={{ uri: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122198868548046461%26id%3D61551393842722&show_text=true&width=500" }}
            style={{ width: '100%', height: 220 }}
          />

          <WebView
            source={{ uri: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D122199103832046461%26id%3D61551393842722&show_text=true&width=500" }}
            style={{ width: '100%', height: 120 }}
          />

          <WebView
            source={{ uri: "https://www.instagram.com/reel/DDfcIO_NKlG/embed" }}
            style={{ width: '100%', height: 530 }}
            originWhitelist={["*"]}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />

          <WebView
            source={{ uri: "https://www.instagram.com/reel/DDe1YyXuAac/embed" }}
            style={{ width: '100%', height: 270 }}
            originWhitelist={["*"]}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 33,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d9f8d0',
    gap: 30,
  },
  welcomeTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#00af00',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#00af00',
  },
  welcomeButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 30,
  },
  welcomeButtonAbout: {
    backgroundColor: '#00af00',
    padding: 12,
    borderRadius: 30,
  },
  aboutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeButtonManual: {
    borderWidth: 2,
    borderColor: '#00af00',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    color: 'white',
  },
  manualText: {
    color: '#00af00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  networks: {
    padding: 20,
    backgroundColor: 'white',
  },
});

export default App;
