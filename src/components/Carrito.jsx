import "../styles/Carrito.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoCard from "./CarritoCard.jsx";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext.jsx";

export default function Carrito({usuarioLogueado}) {
    
    const {productosCarrito, vaciarCarrito, borrarProductosCarrito}=useContext(CarritoContext);

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    );

    function funcionDisparadora(id){
        borrarProductosCarrito(id);
    };

    if(!usuarioLogueado){
        return(
            <Navigate to='/login' replace />
        )
        
    }

    return(
        <div className="carrito-conteiner">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard 
                    producto={producto}
                    funcionDisparadora={funcionDisparadora}
                />
            ))
            : <p>Carrito vacio</p>}
            <div className="w-100">
                {total > 0 ? <span>Total a pagar: {total.toFixed(2)} $</span>: <></>}
            </div>
            <div>
                <button className="btn btn-outline-danger  mx-4" onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to={"/productos"}><button  className="btn btn-outline-success">Volver a Productos</button></Link>
            </div>
            
        </div>
    )
}