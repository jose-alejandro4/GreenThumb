import React from 'react';
import { View, FlatList, Alert, Text } from 'react-native';
import styles from '../styles/globalStyles';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';

export default function Plants({ navigation, cart, setCart }) {

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
        <Text style={styles.cartTitle}>🌿 Plantas</Text>

        <Text
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          🛒 ({totalItems})
        </Text>
      </View>

      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard
            plant={item}
            onPress={() =>
              navigation.navigate('PlantDetails', {
                plant: item,
                setCart: setCart
              })
            }
            addToCart={() => addToCart(item)}
          />
        )}
      />
    </View>
  );
}