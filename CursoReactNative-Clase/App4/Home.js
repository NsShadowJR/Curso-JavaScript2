import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a al Home Causa pee!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
