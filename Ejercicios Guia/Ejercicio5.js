// Clase que representa una Contraseña
class Password {
    constructor(password) {
      this.password = password;
    }
  
    // Método para validar la longitud mínima
    validarLongitud(minLongitud) {
      return this.password.length >= minLongitud;
    }
  
    // Método para validar si contiene una letra mayúscula
    contieneMayuscula(regex) {
      return regex.test(this.password);
    }
  
    // Método para validar si contiene un número
    contieneNumero(regex) {
      return regex.test(this.password);
    }
  
    // Método para validar si contiene un carácter especial
    contieneEspecial(regex) {
      return regex.test(this.password);
    }
  
    // Método para mostrar el resultado final
    mostrarResultado(esValida) {
      if (esValida) {
        alert("¡La contraseña es válida!");
      } else {
        alert("La contraseña no cumple con uno o más requisitos. Revisa la consola para más detalles.");
      }
    }
  }
  
  // Función para solicitar la contraseña al usuario
  function solicitarPassword() {
    return prompt("Ingresa una contraseña:");
  }
  
  // Función para validar la contraseña usando una instancia de la clase Password
  function validarPassword(password) {
    const longitudMinima = 8;
    const regexMayuscula = /[A-Z]/; // Al menos una letra mayúscula
    const regexNumero = /[0-9]/;    // Al menos un número
    const regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/; // Al menos un carácter especial
  
    // Crear instancia de la clase Password
    let pwd = new Password(password);
  
    let esValida = true;
  
    // Validar longitud
    if (!pwd.validarLongitud(longitudMinima)) {
      console.log("Debe tener al menos 8 caracteres.");
      esValida = false;
    }
  
    // Validar si contiene al menos una letra mayúscula
    if (!pwd.contieneMayuscula(regexMayuscula)) {
      console.log("Debe contener al menos una letra mayúscula.");
      esValida = false;
    }
  
    // Validar si contiene al menos un número
    if (!pwd.contieneNumero(regexNumero)) {
      console.log("Debe contener al menos un número.");
      esValida = false;
    }
  
    // Validar si contiene al menos un carácter especial
    if (!pwd.contieneEspecial(regexEspecial)) {
      console.log("Debe contener al menos un carácter especial.");
      esValida = false;
    }
  
    // Mostrar resultado final
    pwd.mostrarResultado(esValida);
  }
  
  // con esta parte se combinan funciones y clases
  let passwordIngresada = solicitarPassword();
  validarPassword(passwordIngresada);
  