
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// OBJETOS ///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class producto {
    constructor(id, nombre, precio,) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
    }
}

class carro {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = precio * cantidad;
        this.msjCompra = `${nombre}, ${cantidad} unidades a $${precio} c/u, ---> Total $ ${precio * cantidad}`
    }

}

const productos = [];
productos.push(new producto(1, "producto A", 300));
productos.push(new producto(2, "producto B", 250));
productos.push(new producto(3, "producto C", 400));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// VARIABLES ////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let listadoCompras = "";
let costoTotal = 0;
let textoProductos = `id: ${productos[0].id} --> ${productos[0].nombre} $ ${productos[0].precio}\nid: ${productos[1].id} --> ${productos[1].nombre} $ ${productos[1].precio}\nid: ${productos[2].id} --> ${productos[2].nombre} $ ${productos[2].precio}`
let listaIdCompras = [];
let carritoVacio = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// FUNCIONES /////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const listaCompras = (carrito) => {
    listadoCompras = "";
    for (i = 0; i < carrito.length; i++) {
        listadoCompras += `Id Compra (${i + 1}): --> ${carrito[i].msjCompra}\n`;
    }
}

const generadorListaIdCompras = (carrito) => {
    for (i = 0; i < carrito.length; i++) {
        listaIdCompras.push(i + 1);
    }
    buscarIdCompra = listaIdCompras.indexOf(id);
}

const otraCompra = (id, productos, carrito) => {
    while (id == 1) {
        let pedido = parseInt(prompt(`Que producto desea volver a comprar?\n\n Mencione el número de id:\n\n${textoProductos}`));
        while ((pedido != productos[0].id) && (pedido != productos[1].id) && (pedido != productos[2].id)) {
            pedido = parseInt(prompt(`Error! Ingrese correctamente el numero de Id del producto que desea comprar:\n${textoProductos}`));
        }

        cantidad = prompt(`Que cantidad desea comprar del ${productos[pedido - 1].nombre}?`);
        while(isNaN(cantidad) || (cantidad <= 0) ) {
            cantidad = parseInt(prompt(`Error! Ingrese las unidades que desea en números`));
        }

        carrito.push(new carro(productos[pedido - 1].nombre, productos[pedido - 1].precio, cantidad));
        id = prompt(`Desea volver a comprar?\n\nMencione numero de id de su respuesta: \n\nid 1: - (Si)\nid 2: - (No)`);
        while((id != 1) && (id != 2)){
            id = parseInt(prompt(`Error! Ingrese correctamente el id de su respuesta.\n\nid 1: - Volver a comprar\nid 2: - No volver a comprar`))
        }
        listaCompras(carrito);
    }
}

const eliminar = (carrito, id) => {
    carrito.splice(id - 1, 1);
    listaCompras(carrito);
}

const reDelete = (id, carrito) => {
    while (id == 1) {
        listaCompras(carrito);
        let idCompra = parseInt(prompt(`Mencione el número de Id de la compra que desea eliminar: \n \n` + listadoCompras));
        for(i = 0; i < carrito.length; i++){
            listaIdCompras.push(parseInt(i + 1));
        }
        buscarIdCompra = listaIdCompras.indexOf(idCompra);
        while(buscarIdCompra == -1){
            idCompra = parseInt(prompt(`Error! Ingrese correctamente el número de Id de la compra que desea eliminar: \n \n` + listadoCompras));   
            buscarIdCompra = listaIdCompras.indexOf(idCompra);
        }
        eliminar(carrito, idCompra);
        if (carrito.length == 0) {
            alert(`Ya no tienes productos en el carrito, actualiza la página y vuelve a comprar`);
            carritoVacio = true;
            return;

        }
        id = prompt(`Desea eliminar otro producto de la lista?\n\nMencione numero de id de su respuesta: \n\nid 1: - (Si)\nid 2: - (No)`);
        while((id != 1) && (id != 2)){
            id = parseInt(prompt(`Error! Ingrese correctamente el id de su respuesta.\n\nid 1: - Volver a elminar algún producto comprado\nid 2: - No eliminar ningún producto comprado`));

        }
        listaCompras(carrito);
    }
}

const costoTotalCompra = (carrito) => {
    costoTotal = 0;
    for (i = 0; i < carrito.length; i++) {
        costoTotal += carrito[i].total
    }
}

const compras = () => {
    let carrito = [];
    let pedido = parseInt(prompt(`Que producto desea comprar? Mencione el número de id:\n${textoProductos}`));

    while ((pedido != productos[0].id) && (pedido != productos[1].id) && (pedido != productos[2].id)) {
        pedido = parseInt(prompt(`Error! Ingrese correctamente el numero de Id del producto que desea comprar:\n${textoProductos}`));
    }

    let cantidad = prompt(`Ingrese el numero de unidades que desea comprar del ${productos[pedido - 1].nombre}?`);
    while(isNaN(cantidad) || (cantidad <= 0) ) {
        cantidad = parseInt(prompt(`Error! Ingrese las unidades que desea en números`));
    }

    carrito.push(new carro(productos[pedido - 1].nombre, productos[pedido - 1].precio, cantidad));
    listaCompras(carrito);

    let reCompra = prompt(`Desea volver a comprar?\n\nMencione número de id de su respuesta: \n\nid 1: - (Si)\nid 2: - (No)`);
    while((reCompra != 1) && (reCompra != 2)){
        reCompra = parseInt(prompt(`Ingrese correctamente el id de su respuesta.\n\nid 1: - Volver a comprar\nid 2: - No volver a comprar`))
    }
    otraCompra(reCompra, productos, carrito);

    msjEliminar = prompt(`El detalle de las compras que ha realizado es el siguiente:\n \n` + listadoCompras + `\n` + `Desea eliminar algún producto? Mencione numero de id de su respuesta \n \nid 1: - (Si)\nid 2: -(No)`);
    while((msjEliminar != 1) && (msjEliminar != 2)){
        msjEliminar = parseInt(prompt(`Error! Ingrese correctamente el id de su respuesta.\n\nid 1: - Eliminar alguna compra realizada\nid 2: - No eliminar ninguna compra realizada`))
    }
    
    if (msjEliminar == 1) {
        id = parseInt(prompt(`Mencione el numero de id de la compra que desea eliminar: \n \n` + listadoCompras));
        for(i = 0; i < carrito.length; i++){
            listaIdCompras.push(parseInt(i + 1));
        }
        buscarIdCompra = listaIdCompras.indexOf(id);
        while(buscarIdCompra == -1){
            id = parseInt(prompt(`Error! Ingrese correctamente el número de Id de la compra que desea eliminar: \n \n` + listadoCompras));   
            buscarIdCompra = listaIdCompras.indexOf(id);
        }
        eliminar(carrito, id);
        if (carrito.length == 0) {
            alert(`Ya no tienes productos en el carrito, actualiza la página y vuelve a comprar`)
            return;
        }
        let reEliminar = prompt(`Desea eliminar otro producto de la lista?\n \n 1 -(Si)\n 2 -(No)`)
        while((reEliminar != 1) && (reEliminar != 2)){
            reEliminar = parseInt(prompt(`Error! Ingrese correctamente el id de su respuesta.\n\nid 1: - Volver a eliminar algún producto comprado\nid 2: - No volver a eliminar ningún producto comprado`))
        }   
        reDelete(reEliminar, carrito);
        if (carritoVacio == true) {
            return;
        }
        costoTotalCompra(carrito);
        alert(`El detalle final de sus compras es el siguiente:\n \n` + listadoCompras + `\nTotalizando en un costo total de $ ${costoTotal} \n \nMuchas gracias por su compra!`)

    } else{
        costoTotalCompra(carrito);
        alert(`El detalle final de sus compras es el siguiente:\n \n` + listadoCompras + `\nTotalizando en un costo total de $ ${costoTotal} \n \nMuchas gracias por su compra!`)
    }
}

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

let compra1 = compras();






