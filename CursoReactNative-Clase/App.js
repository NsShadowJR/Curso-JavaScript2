import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Crear un stack navigator
const Stack = createNativeStackNavigator();

// Componente principal
function HomeScreen({ navigation }) {
  return (
    <LinearGradient
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
        <TouchableOpacity onPress={() => navigation.navigate('ShrekScreen')}>
          <Image
            source={{ uri: 'https://www.drupal.org/files/issues/2020-01-26/google_logo.png' }} // Imagen desde URL
            style={styles.googleImage}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Pantalla de Shrek
function ShrekScreen() {
  return (
    <View style={styles.shrekContainer}>
      <Image
        source={{ uri: 'https://gifdb.com/images/high/shrek-meme-mash-up-john-cena-face-0zgys1s3ip2h44qg.webp' }} // GIF de Shrek
        style={styles.shrekImage}
      />
    </View>
  );
}

// Componente principal del App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ShrekScreen" component={ShrekScreen} options={{ title: 'Shrek' }} />
      </Stack.Navigator>
    </NavigationContainer>
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
  shrekContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fondo blanco para la pantalla de Shrek
  },
  shrekImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajusta la imagen para que mantenga su proporción
  },
});
