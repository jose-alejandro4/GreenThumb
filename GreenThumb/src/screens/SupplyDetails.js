import React from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

export default function SupplyDetails({ route, navigation }) {

  const { item, setCart } = route.params;

  function addToCart(prod) {
    if (!setCart) {
      Alert.alert("Erro", "Carrinho não disponível");
      return;
    }

    setCart(prev => {
      const existing = prev.find(p => p.id === prod.id);

      if (existing) {
        return prev.map(p =>
          p.id === prod.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }

      return [
        ...prev,
        { ...prod, quantity: 1, cartId: Date.now().toString() }
      ];
    });

    Alert.alert("Adicionado 🛒", `${prod.name} foi adicionado`);
  }

  if (!item) {
    return <Text>Erro ao carregar material</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>
      <Text>💰 R$ {item.price}</Text>

      <Text style={{ marginVertical: 10 }}>
        {item.description}
      </Text>

      <CustomButton
        title="Adicionar ao Carrinho 🛒"
        onPress={() => addToCart(item)}
      />

      <CustomButton
        title="Ver Carrinho"
        onPress={() => navigation.navigate('Cart')}
      />
    </ScrollView>
  );
}