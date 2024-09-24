// Función que cuenta los caracteres y los imprime en la consola y en un alert
function contarCaracteres() {
    // Solicitar al usuario que ingrese una palabra u oración
    const textoIngresado = prompt("Por favor ingresa una palabra u oración:");

    if (textoIngresado === null || textoIngresado === "") {
        alert("No ingresaste ninguna palabra u oración.");
        return;
    }

    // Contar los caracteres
    const numeroDeCaracteres = textoIngresado.length;

    // Mostrar la oración y el número de caracteres en un alert
    alert(`La oración que ingresaste fue: "${textoIngresado}"\nNúmero de caracteres: ${numeroDeCaracteres}`);

    // Mostrar también en la consola
    console.log(`Oración ingresada: "${textoIngresado}"`);
    console.log(`Número de caracteres: ${numeroDeCaracteres}`);
}

// Ejecutar la función automáticamente cuando se cargue la página
window.onload = function() {
    contarCaracteres();
};


















































