import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import styles from '../styles/globalStyles';

export default function AddPlant({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  async function savePlant() {
    await addDoc(collection(db, "plants"), {
      name,
      price,
      image: image || "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      favorite: false
    });

    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Planta</Text>

      <TextInput style={styles.input} placeholder="Nome" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Preço" onChangeText={setPrice} />
      <TextInput style={styles.input} placeholder="URL da imagem" onChangeText={setImage} />

      <Button title="Salvar" onPress={savePlant} />
    </View>
  );
}