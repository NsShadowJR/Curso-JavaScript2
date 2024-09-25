// Función para calcular la sumatoria siguiendo la secuencia
function calcularSumatoria() {
    let sumatoria = 0;
    let numeroActual = 500;
    let terminar = false; // Para verificar cuándo terminar la secuencia
    let paso = 44; // El primer decremento
    
    while (!terminar) {
        // Sumar el número actual a la sumatoria
        sumatoria += numeroActual;
        
        // Verificar si hemos llegado al último número
        if (numeroActual >= 800) {
            terminar = true;
            break;
        }

        // Alternar entre restar y sumar en cada paso
        if (paso === 44) {
            numeroActual -= 44; // Restamos en los pasos impares
            paso = 54; // Cambiamos el paso para sumar después
        } else if (paso === 54) {
            numeroActual += 54; // Sumamos en los pasos pares
            paso = 56; // Cambiamos el paso para la próxima resta
        } else if (paso === 56) {
            numeroActual -= 56; // Restamos en el siguiente paso
            paso = 60; // Cambiamos el paso para sumar más
        } else {
            numeroActual += 60; // Sumamos en los pasos finales
        }
    }
    
    // Imprimir la sumatoria total
    console.log(`El resultado de la sumatoria es: ${sumatoria}`);
    alert(`El resultado de la sumatoria es: ${sumatoria}`);
}

// Ejecutar la función automáticamente cuando se cargue la página
window.onload = function() {
    calcularSumatoria();
};