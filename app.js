import { agregarProducto, eliminarProducto, mostrarLista } from "./compras";

const iniciarApp = () => {
    console.log("=== INICIANDO LISTA DE COMPRAS ===");
    
    agregarProducto("Leche");
    agregarProducto("Pan");
    agregarProducto("Huevos");
    agregarProducto("Queso");
    
    agregarProducto("Pan");
    
    mostrarLista();
    
    eliminarProducto("Huevos");
    
    mostrarLista();
    
    eliminarProducto("Arroz");
    
    agregarProducto("Manzanas");
    agregarProducto("Yogurt");
    
    mostrarLista();
};

iniciarApp();