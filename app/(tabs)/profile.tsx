import { ActivityIndicator, StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from '@/api/usuarios.api';

export default function TabTwoScreen() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setUser(data);
      } catch (error) {
        console.log('Error cargando el perfil', error)
      } finally {
        setLoading(false);
      }
    }
    loadUserProfile();
  }, []);


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
            source={{ uri: user?.foto_perfil || 'https://i.pinimg.com/736x/f2/15/41/f21541d5d59eceb63be66d5f5eb6d42c.jpg' }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <ThemedView>
            <ThemedText type="title">{user?.username || 'Usuario'}</ThemedText> {/* el ? es intenta acceder a la propiedad*/}
            <ThemedText type='subtitle'>{user?.rol_nombre || 'Rol no encontrado'}</ThemedText>
            <ThemedText>{user?.email || 'sin correo'}</ThemedText>
          </ThemedView>
        </ThemedView>
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
    gap: 20
  }
});
