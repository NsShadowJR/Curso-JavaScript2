
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }


    mostrarDetalles() {
        let detalleTrabajador = document.createElement("p");
        detalleTrabajador.textContent = `Trabajador: ${this.nombre}, Sueldo: $${this.sueldo.toFixed(2)}`;
        document.body.appendChild(detalleTrabajador);
    }
}


class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo); 
        this.departamento = departamento;
    }

 
    mostrarDetalles() {
        let detalleGerente = document.createElement("p");
        detalleGerente.textContent = `Gerente: ${this.nombre}, Sueldo: $${this.sueldo.toFixed(2)}, Departamento: ${this.departamento}`;
        document.body.appendChild(detalleGerente);
    }
}


const trabajador1 = new Trabajador('Juan', 1200.00);
const trabajador2 = new Trabajador('Ana', 1300.00);

const gerente1 = new Gerente('Carlos', 2500.00, 'Ventas');
const gerente2 = new Gerente('Lucía', 2700.00, 'Marketing');

trabajador1.mostrarDetalles();
trabajador2.mostrarDetalles();
gerente1.mostrarDetalles();
gerente2.mostrarDetalles();
