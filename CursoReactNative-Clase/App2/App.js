import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // Funciones para mostrar alertas
  const showAlert = () => {
    Alert.alert("Alerta", "Este es un mensaje de alerta básico.");
  };

  const showCustomAlert = () => {
    Alert.alert("Alerta Personalizada", "Este es un mensaje de alerta personalizada.");
  };

  const showGoogleAlert = () => {
    Alert.alert("Alerta Google", "Este es un mensaje de alerta del botón con ícono de Google.");
  };

  return (
    <LinearGradient colors={['#ff0000', '#011111']} style={styles.background}>
      <View style={styles.container}>
        <Image 
          source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')} // Imagen local
          style={styles.image}
        />
        <Text style={styles.text}>
          ¡Culun toda la magia del sur!
        </Text>
      </View>

      {/* Botón básico */}
      <View style={styles.buttonContainer}>
        <Button title="Mostrar Alerta" onPress={showAlert} />

        {/* Botón personalizado con TouchableHighlight */}
        <TouchableHighlight style={styles.customButton} onPress={showCustomAlert} underlayColor="#DDDDDD">
          <Text style={styles.customButtonText}>Mostrar Alerta Personalizada</Text>
        </TouchableHighlight>

        {/* Botón personalizado con Pressable e ícono de Google */}
        <Pressable style={styles.googleButton} onPress={showGoogleAlert}>
          <Image
            source={{ uri: 'https://developers.google.com/identity/images/branding_guideline_sample_lt_rd_lg.svg' }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Continuar con Google</Text>
        </Pressable>
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
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 250,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 250,
    justifyContent: 'center',
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  googleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
e