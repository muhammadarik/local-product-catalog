import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/tgx.jpeg')} // Gambar background
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay hitam transparan */}
      <View style={styles.overlay} />

      {/* Konten di tengah */}
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/tgx.jpeg')} // logo atau gambar kecil
          style={styles.logo}
        />
        <Text style={styles.title}>Katalog Produk Lokal Trenggalek</Text>
        <Text style={styles.subtitle}>Menjelajahi Keindahan dan Kreativitas Daerah</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.55)', // hitam transparan
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#E0E0E0',
    marginTop: 8,
    textAlign: 'center',
  },
});
