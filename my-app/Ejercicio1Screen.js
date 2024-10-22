// Ejercicio1Screen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function Ejercicio1Screen() {
  const [radio, setRadio] = useState('');
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularAreaCirculo = () => {
    const r = parseFloat(radio);
    if (r > 0) {
      const area = Math.PI * r * r;
      setResultado(`Área del círculo: ${area.toFixed(2)}`);
    } else {
      setResultado('Ingrese un radio válido');
    }
  };

  const calcularAreaTriangulo = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    if (b > 0 && h > 0) {
      const area = (b * h) / 2;
      setResultado(`Área del triángulo: ${area.toFixed(2)}`);
    } else {
      setResultado('Ingrese base y altura válidas');
    }
  };

  const calcularAreaRectangulo = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    if (b > 0 && h > 0) {
      const area = b * h;
      setResultado(`Área del rectángulo: ${area.toFixed(2)}`);
    } else {
      setResultado('Ingrese base y altura válidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 1: Cálculo de Áreas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese el radio del círculo"
        keyboardType="numeric"
        value={radio}
        onChangeText={setRadio}
      />
      <Button title="Calcular Área del Círculo" onPress={calcularAreaCirculo} />

      <TextInput
        style={styles.input}
        placeholder="Ingrese la base del triángulo"
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese la altura del triángulo"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular Área del Triángulo" onPress={calcularAreaTriangulo} />

      <TextInput
        style={styles.input}
        placeholder="Ingrese la base del rectángulo"
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese la altura del rectángulo"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular Área del Rectángulo" onPress={calcularAreaRectangulo} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Ejercicio1Screen;
