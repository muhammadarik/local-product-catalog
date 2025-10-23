import React, { useState, useLayoutEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Alen Alen',
      price: 'Rp15.000',
      desc: 'Camilan gurih berbentuk cincin dari pati singkong khas Trenggalek.',
      image: require('../../assets/images/alen-alen.jpeg'),
    },
    {
      id: 2,
      name: 'Manco',
      price: 'Rp10.000',
      desc: 'Jajanan manis dari tepung beras renyah berlapis karamel dan wijen khas Trenggalek.',
      image: require('../../assets/images/manco.jpeg'),
    },
    {
      id: 3,
      name: 'Keripik tempe sagu',
      price: 'Rp30.000',
      desc: 'Keripik tempe yang dibuat dengan cara dicetak satu per satu menjadi lembaran tipis Renyah dan gurih.',
      image: require('../../assets/images/kripik-tempe-sagu.jpeg'),
    },
    {
      id: 4,
      name: 'Ayam Lodho',
      price: 'Rp80.000',
      desc: 'Ayam kampung yang dibakar lalu dimasak dengan kuah santan kaya rempah. ',
      image: require('../../assets/images/ayam-lodho.jpeg'),
    },
    {
      id: 5,
      name: 'Batik Trenggalek',
      price: 'Rp300.000 - Rp800.000',
      desc: 'Memiliki kekhasan dan daya tarik tersendiri yang bisa menjadi pilihan oleh-oleh tahan lama.',
      image: require('../../assets/images/batik-trenggalek.jpeg'),
    },
    {
      id: 6,
      name: 'Kerajinan Bambu',
      price: 'Rp1.500 - Rp50.000.000',
      desc: 'Berbagai macam kerajinan tangan yang terbuat dari bambu.',
      image: require('../../assets/images/kerajinan-bambu.jpg'),
    },
    {
      id: 7,
      name: 'Batik Trenggalek',
      price: 'Rp300.000 - Rp800.000',
      desc: 'Memiliki kekhasan dan daya tarik tersendiri yang bisa menjadi pilihan oleh-oleh tahan lama.',
      image: require('../../assets/images/batik-trenggalek.jpeg'),
    },
    {
      id: 8,
      name: 'Batik Trenggalek',
      price: 'Rp300.000 - Rp800.000',
      desc: 'Memiliki kekhasan dan daya tarik tersendiri yang bisa menjadi pilihan oleh-oleh tahan lama.',
      image: require('../../assets/images/batik-trenggalek.jpeg'),
    },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Katalog Produk Lokal',
      headerStyle: { backgroundColor: '#FDEBD0' },
      headerTitleStyle: { fontWeight: 'bold', color: '#4A2C2A' },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={{ marginRight: 15 }}>
          <Ionicons name="information-circle-outline" size={26} color="#4A2C2A" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Detail', { product: item })}
            onDelete={() => deleteProduct(item.id)}
            onEdit={() => navigation.navigate('Form', { product: item, setProducts })}
          />
        )}
        numColumns={2} // Menampilkan dua kolom
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Form', { setProducts })}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF9',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#E67E22',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
});
