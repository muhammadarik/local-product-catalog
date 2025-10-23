import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/tgx.jpeg')} style={{ width: 100, height: 100, borderRadius:10 }} />
      <Text style={styles.title}>Katalog Produk Lokal Trenggalek</Text>
      <Text style={styles.subtitle}>Menjelajahi Keindahan dan Kreativitas Daerah</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFEBCD' },
  title: { fontSize: 22, fontWeight: 'bold', marginTop: 20 },
  subtitle: {
    fontSize: 14,
    color: '#080808',
    marginTop: 4,
    fontStyle:'bold'
  },
});
