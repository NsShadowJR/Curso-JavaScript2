import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      // Define los colores
      colors={['#ff0000', '#011111']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} // Imagen local
          style={styles.image}
        />
        <Text style={styles.text}>
          ¡Culun toda la magia del sur!
        </Text>
      </View>

      {/* Imagen de Google para registro desde URL */}
      <View style={styles.googleContainer}>
        <Image
          source={{ uri: 'https://www.drupal.org/files/issues/2020-01-26/google_logo.png' }} // Imagen desde URL
          style={styles.googleImage}
        />
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
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
  googleContainer: {
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
  },
  googleImage: {
    width: 200, // Ajusta el ancho según sea necesario
    height: 50, // Ajusta la altura según sea necesario
    resizeMode: 'contain', // Mantiene la proporción de la imagen
  },
});