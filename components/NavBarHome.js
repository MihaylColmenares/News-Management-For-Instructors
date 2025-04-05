import { useNavigation } from '@react-navigation/native'
import { Stack, Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Modal, Linking, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const NavBar = () => {
  const theme = useColorScheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPerfil, setMenuPerfil] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();
  const hamburger = require('../assets/images/bars.png');
  const perfil = require('../assets/images/user.png');
  const search = require('../assets/images/searchxd.png');

  return (
      <View style={styles.container}>
        {/* Encabezado */}
        <View style={styles.encabezado}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
              <FontAwesome5 name="bars" size={26} color="white" style={theme == 'dark' ? styles.darkText : styles.lightText}/>
          </TouchableOpacity>
            <View style={styles.searchContainer}>
              <FontAwesome5 name="search" size={20} style={theme == 'dark' ? styles.darkText : styles.lightText}/>
              <TextInput style={[styles.input]} placeholder="Buscar Novedad" placeholderTextColor={theme === 'dark' ? '#fff' : '#000'}/>
            </View>

          <TouchableOpacity onPress={() => setMenuPerfil(true)}>
              <FontAwesome5 name="cog" size={28} color="white" solid style={theme == 'dark' ? styles.darkText : styles.lightText}/>
          </TouchableOpacity>
        </View>

        {/* Menú lateral */}
        <Modal animationType="slide" transparent={true} visible={menuVisible} onRequestClose={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeButton}>
                <FontAwesome5 name="times" size={24} color="white" />
              </TouchableOpacity>

              {menuOptions.map((option, home) => (
                  <TouchableOpacity key={home} onPress={() => option.path && router.push(option.path)} style={styles.menuItem}>
                      <FontAwesome5 name={option.icon} size={18} color="white" />
                      <Text style={styles.menuText}>{option.title}</Text>
                  </TouchableOpacity>
              ))}

              <View style={styles.searchContainerMenu}>   
                <TextInput style={[styles.input]} placeholder="BUSCAR NOVEDAD" placeholderTextColor="white"/>
              </View>
            </View>
          </View>
        </Modal>

        {/* Menú Perfil */}
        <Modal animationType="slide" transparent={true} visible={menuPerfil} onRequestClose={() => setMenuPerfil(false)}>
          <View style={styles.menuContainerP}>
            <View style={styles.menuP}>
              <TouchableOpacity onPress={() => setMenuPerfil(false)} style={styles.closeButtonP}>
                <FontAwesome5 name="times" size={24} color="white" />
              </TouchableOpacity>

              {menuOptionsP.map((option, home) => (
                  <TouchableOpacity
                  key={home}
                  onPress={() => {
                      if (option.title === "Reglamento") {
                      Linking.openURL("https://normograma.sena.edu.co/compilacion/docs/acuerdo_sena_0009_2024.htm");
                      } else if (option.path) {
                      navigation.navigate(option.path);
                      }
                  }}
                  style={styles.menuItemP}
                  >
                  <FontAwesome5 name={option.icon} size={18} color="white" />
                  <Text style={styles.menuTextP}>{option.title}</Text>
                  </TouchableOpacity>
              ))}

            </View>
          </View>
        </Modal>

        <Stack.Screen options={{ headerShown: false }} />
      </View>
  );
}

/* Opciones del menú */
const menuOptions = [
  { path: "/home", title: "Inicio", icon: "home"},
  { path: "process", title: "Mis procesos", icon: "tasks"},
  { title: "Notificaciones", icon: "bell" },
  { path: "regionals", title: "Consultar regionales", icon: "map" },
  { path: "centers", title: "Consultar centros", icon: "school" },
  { path: "sedes",title: "Consultar sedes", icon: "building" },
];

const menuOptionsP = [
    { path: "process", title: "Datos", icon: "paperclip"},
    { title: "Reglamento", icon: "book" },
    { path: "index",title: "Log out", icon: "door-open" },
  ];

/* Estilos */
const styles = StyleSheet.create({
  darkText: {
    color: '#fff'
  },
  lightText: {
    color: '#000'
  },
  container: {
    paddingTop: 10,
  }, 
  encabezado: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
  },
  hamburger: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: 220,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  searchIcon: { 
    width: 20, 
    height: 20, 
    marginRight: 8, 
    tintColor: "#888" },
  input: { 
    flex: 1, 
    height: "100%", 
    color: 'white', 
    textAlign: 'center' 
  },
  perfilheader: { 
    width: 32, 
    height: 38, 
    borderRadius: 16 
  },

  menuContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    width: 250,
    height: '100%',
    backgroundColor: '#222',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  closeButton: { 
    alignSelf: 'flex-start', 
    marginBottom: 10 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: { 
    color: 'white', 
    fontSize: 16, 
    marginLeft: 10 },
  searchContainerMenu: {
    marginTop: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },

  menuContainerP: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 50,
  },
  menuP: {
    width: 250,
    height: '100%',
    backgroundColor: '#222',
    maxHeight: 210,
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  closeButtonP: { 
    alignSelf: 'flex-end', 
    marginBottom: 10 
  },
  menuItemP: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuTextP: { 
    color: 'white', 
    fontSize: 16, 
    marginLeft: 10 },
  searchContainerMenuP: {
    marginTop: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
});

export default NavBar;