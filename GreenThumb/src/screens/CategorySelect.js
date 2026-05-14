import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles/globalStyles';

export default function CategorySelect({ navigation }) {

  const scaleAnim = useRef(new Animated.Value(1)).current;

  function animatePress(callback) {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true })
    ]).start(callback);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 O que você deseja comprar?</Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => animatePress(() => navigation.navigate('Plants'))}
        >
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>🌿 Plantas</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => animatePress(() => navigation.navigate('Supplies'))}
        >
          <Image
            source={{ uri: "https://cobasiblog.blob.core.windows.net/production-ofc/2021/03/artigos-para-jardinagem-capa.png" }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>🧪 Materiais</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}