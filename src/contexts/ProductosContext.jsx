import { createContext, useState, useContext } from 'react';
import Swal from "sweetalert2";
// Crear el contexto del manejo de Productos------------------------------------ 
const ProductosContext = createContext();

export function ProductosProvider({ children }) {

    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState([]);

//-------------------FUNCION OBTENER PRODUCTOS DE LA API------------------------------  
    function obtenerProductos() {
        return(
            new Promise((res, rej) => {
                fetch('https://68100ddf27f2fdac24102328.mockapi.io/productos')
                    .then((respuesta) =>
                        respuesta.json()
                    )
                    .then((datos) => {
                        console.log(datos)
                        setProductos(datos)
                        res(datos)
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        rej(error)
                    })
                ;
            })
        )
    }
//--------------------FUNCION AGREGAR PRODUCTO A LA API------------------------------------
    const agregarProducto = (producto) => {
        return(
            new Promise(async (res, rej) => {
                try {
                    const respuesta = await fetch('https://68100ddf27f2fdac24102328.mockapi.io/productos', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    if (!respuesta.ok) {
                            throw new Error('Error al agregar el producto.');
                    }
                    const data = await respuesta.json();
                    console.log('Producto agregado:', data);
                    res(data)
                            //alert('Producto agregado correctamente');
                    } catch (error) {
                        console.error(error.message);
                        //alert('Hubo un problema al agregar el producto.');
                        rej(error.message)
                    }
            })
        )
    };

//--------------------FUNCION OBTENER UN PRODUCTO  A LA API------------------------------------

    function obtenerUnProducto(id){
        return(
            new Promise((res,rej)=>{
                fetch('https://68100ddf27f2fdac24102328.mockapi.io/productos')
                .then((respuesta) => respuesta.json())
                .then((data) => {
                const productoEncontrado = data.find((d) =>d.id === id);
                if (productoEncontrado) {
                    setProductoSeleccionado(productoEncontrado);
                    res(data)
                } else {
                    rej("Producto no encontrado.");
                }
                //setCargando(false);
                })
                .catch((error) => {
                console.log("Error:", error);
                //setError("Hubo un error al obtener el producto.");
                //setCargando(false);
                rej(error)
                });
        })
        )
        
    };
function editarProducto(producto){
    return(
        new Promise(async (res,rej)=>{
            try {
                const respuesta = await fetch(`https://68100ddf27f2fdac24102328.mockapi.io/productos/${producto.id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(producto),
                });
                if (!respuesta.ok) {
                    throw new Error('Error al actualizar el producto.');
                }
                const data = await respuesta.json();
                res(data);
            } catch (error) {
                console.error(error.message);
                rej(error);
            }   

    })
    )
}

const eliminarProducto = (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar?');
    if (confirmar) {
        return(
            new Promise(async (res, rej) => {
                try {
                    const respuesta = await fetch(`https://68100ddf27f2fdac24102328.mockapi.io/productos/${id}`, {
                    method: 'DELETE',
                    });
                    if (!respuesta.ok) throw new Error('Error al eliminar');
                    alert('Producto eliminado correctamente.');
                    res()
                } catch (error) {
                    console.error(error.message);
                    alert('Hubo un problema al eliminar el producto.');
                    rej(error)
                }
            })
        )
    }
}


return (
    <ProductosContext.Provider value={{productos, obtenerProductos, agregarProducto,productoSeleccionado, obtenerUnProducto, editarProducto, eliminarProducto }}>
        {children}
    </ProductosContext.Provider> );
}
export const useProductosContext = () => useContext(ProductosContext);