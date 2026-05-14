import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from '../styles/globalStyles';

export default function Loading({ navigation }) {

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, duration: 800, useNativeDriver: true })
      ])
    ).start();

    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity }]}>
        🌱 Carregando...
      </Animated.Text>
    </View>
  );
}