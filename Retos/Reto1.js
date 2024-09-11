let texto = prompt("Ingrese una cadena de texto:").toLowerCase();

let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (caracter === 'a') {
        contadorA++;
    } else if (caracter === 'e') {
        contadorE++;
    } else if (caracter === 'i') {
        contadorI++;
    } else if (caracter === 'o') {
        contadorO++;
    } else if (caracter === 'u') {
        contadorU++;
    }
}

console.log(`La vocal 'a' aparece: ${contadorA} veces`);
console.log(`La vocal 'e' aparece: ${contadorE} veces`);
console.log(`La vocal 'i' aparece: ${contadorI} veces`);
console.log(`La vocal 'o' aparece: ${contadorO} veces`);
console.log(`La vocal 'u' aparece: ${contadorU} veces`);
