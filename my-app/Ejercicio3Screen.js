// Ejercicio3Screen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Trabajador {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  mostrarDetalles() {
    return `Nombre: ${this.nombre}, Sueldo: $${this.sueldo.toFixed(2)}`;
  }
}

class Gerente extends Trabajador {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  mostrarDetalles() {
    return `${super.mostrarDetalles()}, Departamento: ${this.departamento}`;
  }
}

function Ejercicio3Screen() {
  const trabajadores = [
    new Trabajador('Juan Pérez', 3000),
    new Trabajador('María López', 2500),
    new Gerente('Carlos García', 5000, 'Ventas'),
    new Gerente('Ana Torres', 5500, 'Recursos Humanos'),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 3: Gestión de Trabajadores</Text>
      {trabajadores.map((trabajador, index) => (
        <Text key={index} style={styles.item}>
          {trabajador.mostrarDetalles()}
        </Text>
      ))}
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
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Ejercicio3Screen;
