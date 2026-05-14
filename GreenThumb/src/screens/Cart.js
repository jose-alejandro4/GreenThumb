import React, { useState } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

export default function Cart({ navigation, cart, setCart }) {

  const [payment, setPayment] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  function removeItem(id) {
    setCart(prev => prev.filter(item => item.cartId !== id));
  }

  function clearCart() {
    setCart([]);
    Alert.alert("Carrinho limpo 🧹");
  }

  function finishPurchase() {
    if (!payment) {
      Alert.alert("Escolha um método de pagamento");
      return;
    }

    navigation.navigate('Success');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Carrinho</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.cartId}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Text style={styles.price}>R$ {item.price}</Text>

            <CustomButton
              title="Remover"
              onPress={() => removeItem(item.cartId)}
            />
          </View>
        )}
      />

      <Text style={styles.title}>Total: R$ {total}</Text>

      <Text>Escolha o pagamento:</Text>

      <CustomButton
        title="Cartão 💳"
        onPress={() => {
          setPayment("cartao");
          Alert.alert("Pagamento", "Você escolheu Cartão 💳");
        }}
      />

      <CustomButton
        title="Pix ⚡"
        onPress={() => {
          setPayment("pix");
          Alert.alert("Pagamento", "Você escolheu Pix ⚡");
        }}
      />

      <CustomButton
        title="Dinheiro 💵"
        onPress={() => {
          setPayment("dinheiro");
          Alert.alert("Pagamento", "Você escolheu Dinheiro 💵");
        }}
      />

      <CustomButton title="🧹 Limpar Carrinho" onPress={clearCart} />

      <CustomButton title="Finalizar Compra" onPress={finishPurchase} />
    </View>
  );
}