// Función que verifica si el número es par o impar
function verificarParImpar() {
    // Solicitar al usuario que ingrese un número
    const numeroIngresado = prompt("Por favor ingresa un número:");

    // Convertir la entrada a número
    const numero = parseInt(numeroIngresado);

    // Verificar si el número es válido
    if (isNaN(numero)) {
        alert("No ingresaste un número válido.");
        return;
    }

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        alert(`El número ${numero} es par.`);
    } else {
        alert(`El número ${numero} es impar.`);
    }

    // Mostrar también en la consola
    console.log(`Número ingresado: ${numero}`);
    console.log(numero % 2 === 0 ? "Es par" : "Es impar");
}

// Ejecutar la función automáticamente cuando se cargue la página
window.onload = function() {
    verificarParImpar();
};
