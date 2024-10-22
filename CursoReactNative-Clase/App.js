import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      // Define los colores
      colors={['#ff0000', '#011111']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          ¡Hola este es mi texto!
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600', // 
    color: 'green',
  },
});
