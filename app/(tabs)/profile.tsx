import { ActivityIndicator, StyleSheet, Image, Pressable } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { getToken, getUserData } from '@/api/usuarios.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9fd700', dark: '#9fd700' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#fffeef"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.profileSection}>
          <Image
            source={{ uri: `http://192.168.1.77:8000/${user?.foto_perfil}`}}
            style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: '#333' }}
          />
          <ThemedView>
            <ThemedText type="title">{user?.first_name || 'Usuario'}</ThemedText> {/* el ? es intenta acceder a la propiedad*/}
            <ThemedText type='subtitle'>{user?.rol_nombre || 'Rol no encontrado'}</ThemedText>
            <ThemedText>{user?.email || 'sin correo'}</ThemedText>
          </ThemedView>
        </ThemedView>
        <Link href='/editProfile' asChild>
            <Pressable style={styles.editProfileBtn}>
              <ThemedText>Editar perfil</ThemedText>
            </Pressable>
          </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
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
  }
});
