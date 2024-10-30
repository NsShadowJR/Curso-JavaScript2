import React from 'react';
import { Text, StyleSheet, View, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'; // Asegúrate de que este archivo exista y esté en la misma carpeta

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function InicioScreen({ navigation }) {
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
        
        {/* Botón que navegará a Home */}
        <Button 
          title="Home" 
          onPress={() => navigation.navigate('Home')} 
          color="#841584" 
        />
      </View>

      {/* Imagen de Google */}
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
});
