import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import styles from '../styles/globalStyles';

export default function Success({ navigation, setCart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Compra realizada!</Text>

      <Text style={{ textAlign: 'center', marginBottom: 20 }}>
        Obrigado pela sua compra 💚
      </Text>

      <CustomButton
        title="Continuar comprando"
        onPress={() => {
          setCart([]);
          navigation.navigate('CategorySelect');
        }}
      />

      <CustomButton
        title="Sair"
        onPress={() => setCart([])}
      />
    </View>
  );
}