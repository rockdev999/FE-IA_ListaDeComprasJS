const listaDeCompras = [];

export const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto}" agregado a la lista.`);
    }
};

export const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista.`);
    }
};

export const mostrarLista = () => {
    console.log("---------------------------");
    console.log("Lista de Compras:");
    
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        for (const producto of listaDeCompras) {
            console.log(`- ${producto}`);
        }
    }
    
    console.log("---------------------------");
};