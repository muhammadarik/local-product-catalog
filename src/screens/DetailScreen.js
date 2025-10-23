import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* Tombol Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gambar Produk */}
        <Image
          source={product.image || { uri: 'https://via.placeholder.com/400' }}
          style={styles.image}
          resizeMode="contain" // supaya gambar tidak terpotong (zoom-out otomatis)
        />

        {/* Informasi Produk */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <View style={styles.separator} />

          <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
          <Text style={styles.desc}>{product.desc}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF9',
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 15,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 6,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f8f8f8',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -3 },
  },
  category: {
    fontSize: 13,
    color: '#E67E22',
    fontWeight: '600',
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  price: {
    fontSize: 18,
    color: '#E67E22',
    fontWeight: '700',
    marginVertical: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});
