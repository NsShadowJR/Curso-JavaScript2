function contarCaracteres() {

    const textoIngresado = prompt("Por favor ingresa una palabra o oración:");

    if (textoIngresado !== null) { 
        const numeroDeCaracteres = textoIngresado.length;

        console.log(`Oración ingresada: "${textoIngresado}"`);
        console.log(`Número de caracteres: ${numeroDeCaracteres}`);


        alert(`La oración que ingresaste fue: "${textoIngresado}"\nNúmero de caracteres: ${numeroDeCaracteres}`);
    } else {
        console.log("No se ingresó ninguna oración.");
        alert("No ingresaste ninguna oración.");
    }
}



















































