import React from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

export default function PlantDetails({ route, navigation }) {

  const { plant, setCart } = route.params;

  function addToCart(item) {
    if (!setCart) {
      Alert.alert("Erro", "Carrinho não disponível");
      return;
    }

    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);

      if (existing) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }

      return [
        ...prev,
        { ...item, quantity: 1, cartId: Date.now().toString() }
      ];
    });

    Alert.alert("Adicionado 🛒", `${item.name} foi adicionado`);
  }

  if (!plant) {
    return <Text>Erro ao carregar planta</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: plant.image }} style={styles.image} />

      <Text style={styles.title}>{plant.name}</Text>
      <Text>💰 R$ {plant.price}</Text>

      <Text style={{ marginVertical: 10 }}>
        {plant.description}
      </Text>

      <Text style={{ marginBottom: 20 }}>
        🌱 {plant.care}
      </Text>

      <CustomButton
        title="Adicionar ao Carrinho 🛒"
        onPress={() => addToCart(plant)}
      />

      <CustomButton
        title="Ver Carrinho"
        onPress={() => navigation.navigate('Cart')}
      />
    </ScrollView>
  );
}