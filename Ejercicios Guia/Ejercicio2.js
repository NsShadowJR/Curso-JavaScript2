// Función que solicita las notas y calcula el promedio ponderado
function calcularPromedioPonderado() {
    // Solicitar las tres notas al usuario
    const nota1 = parseFloat(prompt("Por favor ingresa la Nota 1 (40%):"));
    const nota2 = parseFloat(prompt("Por favor ingresa la Nota 2 (30%):"));
    const nota3 = parseFloat(prompt("Por favor ingresa la Nota 3 (30%):"));

    // Verificar que las tres notas sean válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor ingresa números válidos en las notas.");
        return;
    }

    // Calcular el promedio ponderado
    const promedioPonderado = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

    // Mostrar el promedio en la consola
    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
    console.log(`Promedio ponderado: ${promedioPonderado.toFixed(2)}`);

    // Determinar si el estudiante ha reprobado, va a examen o se exime
    if (promedioPonderado < 3.95) {
        alert(`El promedio ponderado es ${promedioPonderado.toFixed(2)}. El estudiante ha reprobado la asignatura.`);
    } else if (promedioPonderado >= 3.95 && promedioPonderado < 4.95) {
        alert(`El promedio ponderado es ${promedioPonderado.toFixed(2)}. El estudiante va a examen.`);
    } else {
        alert(`El promedio ponderado es ${promedioPonderado.toFixed(2)}. El estudiante se exime de la asignatura.`);
    }
}

// Ejecutar la función automáticamente cuando se cargue la página
window.onload = function() {
    calcularPromedioPonderado();
};