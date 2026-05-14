import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from './CustomButton';

export default function PlantCard({ plant, onPress, addToCart }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: plant.image }} style={styles.image} />
        <Text style={styles.name}>{plant.name}</Text>
        <Text style={styles.price}>R$ {plant.price}</Text>
        <CustomButton title="Adicionar ao Carrinho" onPress={addToCart} />
      </View>
    </TouchableOpacity>
  );
}