import React, { createContext, useState } from "react";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [productosCarrito, setProductosCarrito] = useState([]);
    
    const agregarAlCarrito = (producto) => {
        const existe = productosCarrito.find(p => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === producto.id){
                    const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                    return productoActualizado
                }else{
                    return p
                }
            })
            setProductosCarrito(carritoActualizado)
        }else{
            // Si no existe, lo agregamos con su cantidad
            const nuevoCarrito = [...productosCarrito, producto];
            setProductosCarrito(nuevoCarrito)
        }
    };
    const vaciarCarrito = () => {
    setProductosCarrito([]);
    };
    function borrarProductoCarrito(id){
        console.log(id)
        dispararSweetAlertBasico("Producto Eliminado", "El producto fue borrado con éxito del carrito", "error", "Cerrar");
        const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
        setProductosCarrito(nuevoCarrito);
    }

    return (
        <CarritoContext.Provider
        value={{ productosCarrito, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito }}
        >
        {children}
        </CarritoContext.Provider>
    );
}
