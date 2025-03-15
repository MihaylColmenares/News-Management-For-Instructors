import { ActivityIndicator, StyleSheet } from 'react-native';

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
        <ThemedText type="title">{user?.username || 'Usuario'}</ThemedText>
        <ThemedText>{user?.email || 'sin correo'}</ThemedText>
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
});
