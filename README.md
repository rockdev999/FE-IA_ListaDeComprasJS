# Gestión de Lista de Compras

Aplicación simple para gestionar una lista de compras con JavaScript ES6+.

## Descripción

Este proyecto permite:
- Agregar productos a la lista de compras
- Eliminar productos de la lista
- Ver la lista completa de productos
- Prevenir productos duplicados

## Estructura del proyecto
```
proyecto-lista-compras/
├── index.html
├── compras.js
├── app.js
└── README.md
```

## Instalación y uso

1. Descarga todos los archivos
2. Abre el archivo index.html en tu navegador
3. Abre la consola del navegador (F12) para ver los resultados

## Funcionalidades

### Agregar productos
La función agregarProducto() añade productos al final de la lista y verifica que no estén duplicados.

### Eliminar productos
La función eliminarProducto() busca y elimina un producto específico de la lista.

### Mostrar lista
La función mostrarLista() imprime todos los productos registrados en la consola.

## Características de ES6+ utilizadas

- Uso de const para variables que no se reasignan
- Arrow functions para todas las funciones
- Template literals para concatenación de strings
- Módulos ES6 con export e import
- Bucle for...of para recorrer el arreglo
- Métodos de arrays: includes(), indexOf(), splice(), push()

## Ejemplo de salida
```
=== INICIANDO LISTA DE COMPRAS ===
Producto "Leche" agregado a la lista.
Producto "Pan" agregado a la lista.
Producto "Huevos" agregado a la lista.
Producto "Queso" agregado a la lista.
El producto "Pan" ya está en la lista.
---------------------------
Lista de Compras:
- Leche
- Pan
- Huevos
- Queso
---------------------------
```
