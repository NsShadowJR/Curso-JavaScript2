// Ejercicio4Screen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Ejercicio4Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Ejercicio4Screen;
