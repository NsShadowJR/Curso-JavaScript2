// Clase que representa un Texto
class Texto {
    constructor(texto) {
      this.texto = texto;
    }
  
    // Método para contar el número de caracteres
    contarCaracteres() {
      return this.texto.length;
    }
  
    // Método para mostrar el resultado en un alert
    mostrarResultado() {
      let numeroCaracteres = this.contarCaracteres();
      alert(`La oración ingresada es: "${this.texto}" y tiene ${numeroCaracteres} caracteres.`);
    }
  }
  
  // Función para solicitar al usuario que ingrese una palabra u oración
  function solicitarTexto() {
    return prompt("Ingresa una palabra u oración:");
  }
  
  //Función para contar caracteres usando una instancia de la clase Texto
  function contarCaracteresTexto(texto) {
    let textoObj = new Texto(texto);
    return textoObj.contarCaracteres();
  }
  
  // Función para mostrar el resultado usando una instancia de la clase Texto
  function mostrarResultadoTexto(texto) {
    let textoObj = new Texto(texto);
    textoObj.mostrarResultado();
  }
  
  //Lógica principal que combina funciones y clases
  let textoIngresado = solicitarTexto();
  let numeroCaracteres = contarCaracteresTexto(textoIngresado);
  mostrarResultadoTexto(textoIngresado);
  