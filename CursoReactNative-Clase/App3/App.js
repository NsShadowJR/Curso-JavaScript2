import React from 'react';
import { Text, StyleSheet, View, Image, Button, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const showAlert = () => Alert.alert("¡Alerta!", "Este es un botón de alerta simple.");
  const showCustomAlert = () => Alert.alert("¡Alerta Personalizada!", "Has presionado el botón personalizado.");
  const showGoogleAlert = () => Alert.alert("¡Google Alert!", "Este botón incluye un ícono de Google.");

  return (
    <LinearGradient
      colors={['#ff0000', '#011111']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          source={require('./assets/LOGO ORIGINAL TRANSPARENCIA.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          ¡Culun toda la magia del sur!
        </Text>
        

        <Button 
          title="Button" 
          onPress={showAlert} 
          color="#841584" 
        />


        <TouchableHighlight
          style={styles.customButton}
          onPress={showCustomAlert}
          underlayColor="#DDDDDD"
        >
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </TouchableHighlight>


        <Pressable style={styles.googleButton} onPress={showGoogleAlert}>
          <Image 
            source={{ uri: 'https://freelogopng.com/images/all_img/1657955079google-icon-png.png' }}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText}>Pressable</Text>
        </Pressable>
      </View>


      <View style={styles.googleContainer}>
        <Image
          source={{ uri: 'https://www.drupal.org/files/issues/2020-01-26/google_logo.png' }}
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
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  customButton: {
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
