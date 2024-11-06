import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a al Home Causa pee desde App 4!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent
