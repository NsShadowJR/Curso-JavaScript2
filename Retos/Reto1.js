// Función para contar cuántas veces aparecen las vocales en la cadena de texto
function contarVocales() {
    // Solicitar la cadena de texto al usuario
    let texto = prompt("Por favor ingresa una cadena de texto:");
    
    // Inicializar contadores para cada vocal
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;
    
    // Convertir el texto a minúsculas para ignorar las mayúsculas
    texto = texto.toLowerCase();
    
    // Recorrer cada carácter de la cadena
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        
        // Contar las vocales
        switch (caracter) {
            case 'a':
                contadorA++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'o':
                contadorO++;
                break;
            case 'u':
                contadorU++;
                break;
        }
    }
    
    // Mostrar los resultados en la consola
    console.log(`En la cadena ingresada, la vocal 'a' aparece ${contadorA} veces.`);
    console.log(`En la cadena ingresada, la vocal 'e' aparece ${contadorE} veces.`);
    console.log(`En la cadena ingresada, la vocal 'i' aparece ${contadorI} veces.`);
    console.log(`En la cadena ingresada, la vocal 'o' aparece ${contadorO} veces.`);
    console.log(`En la cadena ingresada, la vocal 'u' aparece ${contadorU} veces.`);
    
    // Mostrar los resultados en una alerta
    alert(`En la cadena ingresada, la vocal 'a' aparece ${contadorA} veces.\n` +
          `La vocal 'e' aparece ${contadorE} veces.\n` +
          `La vocal 'i' aparece ${contadorI} veces.\n` +
          `La vocal 'o' aparece ${contadorO} veces.\n` +
          `La vocal 'u' aparece ${contadorU} veces.`);
}

// Ejecutar la función automáticamente cuando se cargue la página
window.onload = function() {
    contarVocales();
};