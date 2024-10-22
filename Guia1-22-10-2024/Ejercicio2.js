
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }


    mostrarDetalles() {
  
        let detalleProducto = document.createElement("p");
        detalleProducto.textContent = `Producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`;
        
        document.body.appendChild(detalleProducto);
    }
}


const producto1 = new Producto('Laptop', 150000);
const producto2 = new Producto('Smartphone', 80000);
const producto3 = new Producto('Audífonos', 10000);


producto1.mostrarDetalles();
producto2.mostrarDetalles();
producto3.mostrarDetalles();
