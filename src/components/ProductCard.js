import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductCard({ product, onPress, onDelete, onEdit }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={product.image || { uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.desc} numberOfLines={2}>
          {product.desc}
        </Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onEdit}>
            <Ionicons name="create-outline" size={20} color="#2E86C1" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Ionicons name="trash-outline" size={20} color="#E74C3C" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    width: '48%', // untuk dua kolom
    // marginBottom: 12,
    marginTop: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 110,
  },
  info: {
    padding: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  price: {
    color: '#E67E22',
    fontWeight: 'bold',
    marginTop: 4,
  },
  desc: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginTop: 8,
  },
});
