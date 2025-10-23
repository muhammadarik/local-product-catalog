import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/trenggalek.jpeg')} // ganti dengan gambar lokal kamu
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        {/* Tombol Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Katalog Produk Lokal Trenggalek</Text>
          <Text style={styles.subtitle}>Menjelajahi Keindahan dan Kreativitas Daerah</Text>
        </View>
      </View>

      {/* Tentang Aplikasi */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="storefront-outline" size={24} color="#E67E22" />
          <Text style={styles.cardTitle}>Tentang Aplikasi</Text>
        </View>
        <Text style={styles.cardContent}>
          Aplikasi ini dirancang untuk menampilkan berbagai produk lokal khas Kabupaten Trenggalek,
          mulai dari kuliner, kerajinan tangan, hingga fashion tradisional.
          Tujuannya adalah untuk memperkenalkan potensi ekonomi kreatif daerah sekaligus memudahkan masyarakat
          dalam menemukan produk-produk lokal berkualitas.
        </Text>
      </View>

      {/* Tentang Penyusun */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="person-circle-outline" size={24} color="#3498DB" />
          <Text style={styles.cardTitle}>Tentang Penyusun</Text>
        </View>
        <Text style={styles.cardContent}>
          Aplikasi ini dibuat sebagai proyek ETS pengembangan aplikasi mobile menggunakan React Native
          dengan tujuan untuk memahami implementasi navigasi, pengelolaan state, dan fitur CRUD sederhana.
        </Text>
        <View style={styles.authorBox}>
          <Text style={styles.authorName}>👤 Muhammad Arik Sunanul Huda</Text>
          <Text style={styles.authorDesc}>NPM: 23081010318</Text>
          <Text style={styles.authorDesc}>Program Studi Informatika</Text>
          <Text style={styles.authorDesc}>Universitas Pembangunan Nasional "Veteran" Jawa Timur </Text>
        </View>
      </View>

      {/* Kerangka Pembuatan Aplikasi */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="code-slash-outline" size={24} color="#27AE60" />
          <Text style={styles.cardTitle}>Kerangka Pembuatan Aplikasi</Text>
        </View>
        <Text style={styles.cardContent}>
          Aplikasi ini dibangun menggunakan:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• React Native (Expo CLI)</Text>
          <Text style={styles.listItem}>• @react-navigation/native dan native-stack</Text>
          <Text style={styles.listItem}>• react-native-screens & react-native-safe-area-context</Text>
          <Text style={styles.listItem}>• Komponen FlatList untuk daftar produk</Text>
          <Text style={styles.listItem}>• State management sederhana (useState dan useEffect)</Text>
        </View>
        {/* <Text style={styles.cardContent}>
          Dengan kerangka ini, aplikasi mampu menampilkan data produk, menambahkan, mengedit,
          serta menghapus data dengan mudah.
        </Text> */}
      </View>

      <Text style={styles.footerText}>© 2025 - Katalog Produk Lokal Trenggalek</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF9',
  },
  header: {
    position: 'relative',
    height: 220,
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 30,
    padding: 8,
    zIndex: 10,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#EEE',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: '#333',
  },
  cardContent: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  authorBox: {
    marginTop: 10,
    backgroundColor: '#F4F6F7',
    borderRadius: 10,
    padding: 10,
  },
  authorName: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2C3E50',
  },
  authorDesc: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  list: {
    marginVertical: 5,
  },
  listItem: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#999',
    marginBottom: 20,
  },
});
