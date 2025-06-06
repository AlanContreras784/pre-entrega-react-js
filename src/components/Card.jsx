import "../styles/Productos.css"
import { Link, Navigate } from "react-router-dom";


function Card({producto}){
    
    return(
        <div className="productos-conteiner" >
            <div key={producto.id} className="producto-card">
                <img className="producto-image" src={producto.imagen}></img>
                <h1>{producto.name}</h1>
                <p>{producto.price} $</p>
                <Link to={"/productos/"+producto.id}><button className="btn btn-outline-warning">Ver Detalles del Producto</button></Link>
                
            </div>
            
        </div>
    )
}

export default Card