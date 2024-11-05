// esta funcion cuenta los caracteres de la palabra o oracion que el usuario escribre
function contarCaracteres() {
    // Solicitar al usuario que ingrese una palabra o oración
    const textoIngresado = prompt("Por favor ingresa una palabra u oración:");

    if (textoIngresado === null || textoIngresado === "") {
        alert("No ingresaste ninguna palabra u oración.");
        return;
    }

    // aqui se cuentan los caracteres
    const numeroDeCaracteres = textoIngresado.length;

    // Mostrar la oración y el número de caracteres en un alert
    alert(`La oración que ingresaste fue: "${textoIngresado}"\nNúmero de caracteres: ${numeroDeCaracteres}`);

    // el resultado se muestra en pantalla
    console.log(`Oración ingresada: "${textoIngresado}"`);
    console.log(`Número de caracteres: ${numeroDeCaracteres}`);
}

// esta parte es necesaria para que el cuadro de texto sea mostrado en pantalla
window.onload = function() {
    contarCaracteres();
};


















































