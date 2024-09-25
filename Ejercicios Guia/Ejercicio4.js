// Tarifa por hora para turnos
const TARIFA_DIURNA = 12000; // CLP por hora en turno diurno
const TARIFA_NOCTURNA = 16000; // CLP por hora en turno nocturno
const HORAS_TURNO = 10; // Cantidad de horas trabajadas por turno

// Incremento por trabajar el domingo
const INCREMENTO_DOMINGO_DIURNO = 2000; // CLP por hora adicional en domingo diurno
const INCREMENTO_DOMINGO_NOCTURNO = 3000; // CLP por hora adicional en domingo nocturno

// Función para calcular el pago de un día en base al turno y si es domingo
function calcularPagoDiario(turno, esDomingo) {
    let tarifa;

    // Determinar la tarifa base según el turno
    if (turno === "diurno") {
        tarifa = TARIFA_DIURNA;
        if (esDomingo) {
            tarifa += INCREMENTO_DOMINGO_DIURNO; // Agregar incremento por ser domingo
        }
    } else if (turno === "nocturno") {
        tarifa = TARIFA_NOCTURNA;
        if (esDomingo) {
            tarifa += INCREMENTO_DOMINGO_NOCTURNO; // Agregar incremento por ser domingo
        }
    }

    // Calcular el pago diario
    return tarifa * HORAS_TURNO;
}

// Objetos para cada empleado con sus días trabajados y turnos
const empleado1 = {
    nombre: "Empleado 1",
    diasTrabajados: [
        { dia: "Lunes", turno: "nocturno", esDomingo: false },
        { dia: "Martes", turno: "nocturno", esDomingo: false },
        { dia: "Miércoles", turno: "nocturno", esDomingo: false },
        { dia: "Jueves", turno: "diurno", esDomingo: false },
        { dia: "Viernes", turno: "diurno", esDomingo: false }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

const empleado2 = {
    nombre: "Empleado 2",
    diasTrabajados: [
        { dia: "Martes", turno: "nocturno", esDomingo: false },
        { dia: "Miércoles", turno: "nocturno", esDomingo: false },
        { dia: "Jueves", turno: "nocturno", esDomingo: false },
        { dia: "Domingo", turno: "diurno", esDomingo: true }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

const empleado3 = {
    nombre: "Empleado 3",
    diasTrabajados: [
        { dia: "Miércoles", turno: "diurno", esDomingo: false },
        { dia: "Jueves", turno: "diurno", esDomingo: false },
        { dia: "Viernes", turno: "diurno", esDomingo: false },
        { dia: "Sábado", turno: "nocturno", esDomingo: false },
        { dia: "Domingo", turno: "nocturno", esDomingo: true }
    ],
    pagoDiario: [],
    totalSemanal: 0
};

// Función para calcular el pago total semanal de cada empleado
function calcularPagoSemanal(empleado) {
    empleado.diasTrabajados.forEach(dia => {
        const pago = calcularPagoDiario(dia.turno, dia.esDomingo);
        empleado.pagoDiario.push({ dia: dia.dia, pago: pago });
        empleado.totalSemanal += pago;
    });
}

// Calcular el pago para cada empleado
calcularPagoSemanal(empleado1);
calcularPagoSemanal(empleado2);
calcularPagoSemanal(empleado3);

// Mostrar el pago diario y el total semanal de cada empleado en la consola
console.log(`${empleado1.nombre} - Pago Diario:`, empleado1.pagoDiario, `- Total Semanal: ${empleado1.totalSemanal}`);
console.log(`${empleado2.nombre} - Pago Diario:`, empleado2.pagoDiario, `- Total Semanal: ${empleado2.totalSemanal}`);
console.log(`${empleado3.nombre} - Pago Diario:`, empleado3.pagoDiario, `- Total Semanal: ${empleado3.totalSemanal}`);

alert(`${empleado1.nombre} - Total Semanal: ${empleado1.totalSemanal}`);
alert(`${empleado2.nombre} - Total Semanal: ${empleado2.totalSemanal}`);
alert(`${empleado3.nombre} - Total Semanal: ${empleado3.totalSemanal}`);