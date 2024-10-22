// Función para calcular el área de un círculo
function areaCirculo() {
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    let area = Math.PI * Math.pow(radio, 2);
    

    let resultadoCirculo = document.createElement("p");
    resultadoCirculo.textContent = `El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`;
    document.body.appendChild(resultadoCirculo); 
}


function areaTriangulo() {
    let base = parseFloat(prompt("Ingresa la base del triángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
    let area = (base * altura) / 2;


    let resultadoTriangulo = document.createElement("p");
    resultadoTriangulo.textContent = `El área del triángulo es: ${area.toFixed(2)} unidades cuadradas.`;
    document.body.appendChild(resultadoTriangulo); 
}


function areaRectangulo() {
    let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
    let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
    let area = base * altura;


    let resultadoRectangulo = document.createElement("p");
    resultadoRectangulo.textContent = `El área del rectángulo es: ${area.toFixed(2)} unidades cuadradas.`;
    document.body.appendChild(resultadoRectangulo); 
}


areaCirculo();
areaTriangulo();
areaRectangulo();
