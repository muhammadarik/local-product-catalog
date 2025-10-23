import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function FormScreen({ route, navigation }) {
  const { setProducts, product } = route.params || {};
  const [name, setName] = useState(product ? product.name : '');
  const [price, setPrice] = useState(product ? product.price : '');
  const [desc, setDesc] = useState(product ? product.desc : '');
  const [imageUrl, setImageUrl] = useState(
    product && product.image?.uri ? product.image.uri : ''
  );

  const handleSave = () => {
    const newProduct = {
      id: product ? product.id : Date.now(),
      name,
      price,
      desc,
      image: imageUrl ? { uri: imageUrl } : require('../../assets/favicon.png'),
    };

    setProducts((prev) => {
      if (product) {
        // Update
        return prev.map((item) => (item.id === product.id ? newProduct : item));
      } else {
        // Create
        return [...prev, newProduct];
      }
    });

    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{product ? 'Edit Produk' : 'Tambah Produk'}</Text>

      <TextInput
        placeholder="Nama Produk"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Harga"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />

      <TextInput
        placeholder="Deskripsi"
        value={desc}
        onChangeText={setDesc}
        multiline
        style={[styles.input, { height: 100 }]}
      />

      <TextInput
        placeholder="URL Gambar (opsional)"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />

      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.previewImage}
          resizeMode="cover"
        />
      ) : (
        <Text style={{ color: '#999', fontStyle: 'italic', textAlign: 'center' }}>
          Belum ada gambar
        </Text>
      )}

      <Button title="Simpan Produk" onPress={handleSave} color="#E67E22" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFDF9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
    color: '#4A2C2A',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
