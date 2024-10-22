import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ejercicio1Screen from './Ejercicio1Screen'; // Asegúrate de que la ruta sea correcta
import Ejercicio3Screen from './Ejercicio3Screen'; // Asegúrate de que esta ruta también sea correcta
import Ejercicio4Screen from './Ejercicio4Screen'; // Asegúrate de que esta ruta también sea correcta

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Ejercicio1" component={Ejercicio1Screen} />
        <Stack.Screen name="Ejercicio3" component={Ejercicio3Screen} />
        <Stack.Screen name="Ejercicio4" component={Ejercicio4Screen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// Componente para el Menú Principal
function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú de Ejercicios</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ejercicio 1" onPress={() => navigation.navigate('Ejercicio1')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ejercicio 3" onPress={() => navigation.navigate('Ejercicio3')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ejercicio 4" onPress={() => navigation.navigate('Ejercicio4')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
