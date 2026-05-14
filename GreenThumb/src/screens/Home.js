import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import PlantCard from '../components/PlantCard';
import { plants } from '../data/plants';
import styles from '../styles/globalStyles';

export default function Home({ navigation }) {
  const [cart, setCart] = useState([]);

function addToCart(item) {
  const newItem = {
    ...item,
    cartId: Date.now().toString()
  };

  setCart([...cart, newItem]);
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌿 GreenThumb</Text>

      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlantCard
            plant={item}
            onPress={() => navigation.navigate('PlantDetails', { item })}
            addToCart={() => addToCart(item)}
          />
        )}
      />

      <Button
        title="🛒 Ver Carrinho"
        onPress={() => navigation.navigate('Cart', { cart })}
      />
    </View>
  );
}