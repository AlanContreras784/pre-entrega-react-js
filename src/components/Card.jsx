import { useState } from "react";
import "../styles/Productos.css"

function Card({producto, funcionCarrito}){
    const [cantidad, setCantidad] = useState(1);
    
    function agregarAlCarrito() {
        if (cantidad < 1) return;
        funcionCarrito({ ...producto, cantidad }); // Pasamos también la cantidad
    }

    function sumarContador() {
        setCantidad(cantidad + 1)
    }

    function restarContador(){
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="productos-conteiner" >
            <div key={producto.id} className="producto-card">
                <img className="producto-image" src={producto.image}></img>
                <h1>{producto.title}</h1>
                <small>{producto.description}</small>
                <p>{producto.price} $</p>
                <button className="btn btn-outline-warning" onClick={agregarAlCarrito}>Agregar al carrito</button>
                <div>
                    <button className="me-3 btn btn-light" onClick={restarContador}>-</button>
                    <span>{cantidad}</span>
                    <button className="ms-3 btn btn-light" onClick={sumarContador}>+</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Card