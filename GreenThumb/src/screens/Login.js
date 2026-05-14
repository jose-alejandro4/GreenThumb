import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import styles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

import { auth } from '../services/firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleLogin() {
  signInWithEmailAndPassword(auth, email.trim(), password.trim())
    .then(() => navigation.navigate('CategorySelect'))
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

      if (error.code === "auth/user-not-found") {
        Alert.alert("Usuário não encontrado");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Senha incorreta");
      } else if (error.code === "auth/invalid-credential") {
        Alert.alert("Email ou senha inválidos");
      } else {
        Alert.alert("Erro", error.message);
      }
    });
}

function handleRegister() {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => navigation.navigate('CategorySelect'))
    .catch((error) => {
      Alert.alert("Erro", error.message);
    });
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 GreenThumb</Text>

      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />

      <CustomButton title="Entrar" onPress={handleLogin} />
      <CustomButton title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}