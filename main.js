const precioProductoA = 2000
const precioProductoB = 1000
const precioProductoC = 4000

const stockInicialA = 100
const stockInicialB = 50
const stockInicialC = 20

let stockValidado = 0;
let cantidad = 0;
let total = 0;


let productos = ["producto A", "producto B", "producto C"]

producto = prompt(`Qué producto desea comprar? 
                        Ingrese el numero que coorresponda:
                        1 - (Producto A)
                        2 - (Producto B)
                        3 - (Producto C)`);

while ((producto != 1) && (producto != 2) && (producto != 3)) {
    alert(`Ingrese correctamente el numero del producto`);
    producto = prompt(`Nuevamente, qué producto desea comprar? 
                        Ingrese el numero que coorresponda:
                        1 - (Producto A)
                        2 - (Producto B)
                        3 - (Producto C)`);
}

cantidad = prompt(`Ingrese la cantidad del producto ${producto} que desea comprar`);

while (cantidad <= 0) {
    alert(`Ingrese correctamente la cantidad, numero entero mayor a 0.`);
    cantidad = prompt(`Ingrese nuevamente la cantidad del producto ${producto} que desea comprar`);
}


const stock = (producto, cantidad) => {

    if ((producto == 1) && (cantidad <= stockInicialA)) {
        stockValidado = true;
        return stockValidado;
    }
    else if ((producto == 1) && (cantidad > stockInicialA)) {
        alert(`Lamentablemente no contamos con el stock que desea del producto A contamos con un stock de ${stockInicialA} unidades`)
        stockValidado = false;
        return stockValidado;
    }
    if ((producto == 2) && (cantidad <= stockInicialB)) {
        stockValidado = true;
        return stockValidado;
    }
    else if ((producto == 2) && (cantidad > stockInicialB)) {
        alert(`Lamentablemente no contamos con el stock que desea del producto B contamos con un stock de ${stockInicialB} unidades`)
        stockValidado = false;
        return stockValidado;
    }
    if ((producto == 3) && (cantidad <= stockInicialC)) {
        stockValidado = true;
        return stockValidado;
    }
    else if ((producto == 3) && (cantidad > stockInicialC)) {
        alert(`Lamentablemente no contamos con el stock que desea del producto C contamos con un stock de ${stockInicialC} unidades`)
        stockValidado = false;
        return stockValidado;
    }
}



const costoTotal = (producto, cantidad) => {
    if ((stockValidado == true) && (producto == 1)) {
        total = cantidad * precioProductoA; 
        alert(`Compraste ${cantidad} unidades del Producto A a un precio de $ ${precioProductoA}, totalizando la compra en $ ${total} `);
        return true;
    }
    else if ((stockValidado == true) && (producto == 2)) {
        total = cantidad * precioProductoB; 
        alert(`Compraste ${cantidad} unidades del Producto B a un precio de $ ${precioProductoB}, totalizando la compra en $ ${total} `);
        return true;
    }
    else if ((stockValidado == true) && (producto == 3)) {
        total = cantidad * precioProductoC; 
        alert(`Compraste ${cantidad} unidades del Producto C a un precio de $ ${precioProductoC}, totalizando la compra en $ ${total} `);
        return true;
    }
    

}


stock (producto, cantidad);
costoTotal(producto, cantidad);



