// Control que verifica que la contraseña sea correcta
function verificarContrasena() {
    const contrasena = prompt("Por favor ingresa tu contraseña:");

    if (contrasena === null) {
        alert("No ingresaste ninguna contraseña.");
        return;
    }

    // Criterios de seguridad
    const tieneLongitudSuficiente = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneNumero = /\d/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(contrasena);

    // Aqui se verifica que todos los criterios se cumplan
    if (!tieneLongitudSuficiente) {
        alert("La contraseña debe tener al menos 8 caracteres.");
    } else if (!tieneMayuscula) {
        alert("La contraseña debe contener al menos una letra mayúscula.");
    } else if (!tieneNumero) {
        alert("La contraseña debe contener al menos un número.");
    } else if (!tieneCaracterEspecial) {
        alert("La contraseña debe contener al menos un carácter especial (!@#$%^&*()_+{}[]:;<>,.?~\\-).");
    } else {
        alert("¡Contraseña válida!");
    }

    // Se imprime el estado de la contraseña en la consola
    console.log(`Contraseña ingresada: ${contrasena}`);
    console.log(`Longitud suficiente: ${tieneLongitudSuficiente}`);
    console.log(`Contiene mayúscula: ${tieneMayuscula}`);
    console.log(`Contiene número: ${tieneNumero}`);
    console.log(`Contiene carácter especial: ${tieneCaracterEspecial}`);
}

// Esta parte es necesaria para mostrar todo en pantalla
window.onload = function() {
    verificarContrasena();
};