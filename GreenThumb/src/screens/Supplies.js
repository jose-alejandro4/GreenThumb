import React from 'react';
import { View, FlatList, Text, Image, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';
import { supplies } from '../data/supplies';

export default function Supplies({ navigation, cart, setCart }) {

  function addToCart(item) {
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

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>

      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>🧪 Materiais</Text>

        <Text
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          🛒 ({totalItems})
        </Text>
      </View>

      <FlatList
        data={supplies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SupplyDetails', {
                item,
                setCart: setCart
              })
            }
          >
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>

              <CustomButton
                title="Adicionar ao Carrinho"
                onPress={() => addToCart(item)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}