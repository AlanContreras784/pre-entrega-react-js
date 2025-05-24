import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"

function ProductosContainer({functionCarrito}){
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((respuesta) =>
                respuesta.json()
            )
            .then((data) => {
                console.log(data)
                setProductos(data)
                setCargando(false);
            })
            .catch((error) => {
                console.log("Error", error)
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);}

    function functionEnProductos(producto){
        functionCarrito(producto)
    }

    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return(
            <div>
                <div className="">
                    <h1 className="text-center py-3">Nuestros Productos</h1>
                </div>
                <div className="productos-conteiner">
                    {productos.map((producto) => (
                    <Card
                        key={producto.id}
                        producto={producto}
                        funcionCarrito={functionEnProductos}
                    />
                ))}
                </div>
                
            </div>
        )
    }

    
}

export default ProductosContainer
