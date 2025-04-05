import { ActivityIndicator, StyleSheet, Image, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import {  View } from 'react-native';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { getToken, getUserData } from '@/api/usuarios.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import NavBar from '@/components/NavBarHome';

export default function TabTwoScreen() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useFocusEffect(
    useCallback(() => {
      const loadUserProfile = async () => {
        try {
          const token = await getToken();
          if (!token) {
            console.log("No se encontró un token, redirigiendo...");
            setLoading(false);
            return;
          }
          const data = await getUserData(token);
          setUser(data);
        } catch (error) {
          console.log('Error cargando el perfil', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadUserProfile();
    }, [])
  );
  


  if (loading) {
    return <ActivityIndicator size='large' color='#9fd700' />
  }

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.section}>
        <View style={styles.profileBox}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: `http://192.168.1.77:8000/${user?.foto_perfil}`}}
              style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: '#444444' }}
            />
            <View style={styles.box}>
              <ThemedText type="title">{user?.first_name || 'Usuario'}</ThemedText> {/* el ? es intenta acceder a la propiedad*/}
              <ThemedText type='subtitle'>{user?.rol_nombre || 'Rol no encontrado'}</ThemedText>
              <ThemedText>{user?.email || 'sin correo'}</ThemedText>
            </View>
          </View>
          <Link href='/editProfile' asChild>
            <Pressable style={styles.editProfileBtn}>
              <ThemedText>Editar perfil</ThemedText>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 33,
    padding: 10,
    gap: 20,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  profileBox: {
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#444444',
    padding: 40,
    borderRadius: 30,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    fontWeight: 'bold',
  },
  editProfileBtn: {
    backgroundColor: '#00af00',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#444444'
  }
});
