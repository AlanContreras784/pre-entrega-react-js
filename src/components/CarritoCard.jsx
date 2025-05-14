import "../styles/Carrito.css"

function CarritoCard({producto, funcionDisparadora}){
    
    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

    return(
        <div className="carrito-card " >
            <h4 className="carrito-titulo fs-5">{producto.title}</h4>
            <img className="carrito-image" src={producto.image}></img>
            <span className="m-1">{producto.cantidad}</span>
            <div>
                <p >Precio unitario</p>
                <span >{producto.price} $</span>
            </div>
            <div>
                <p>Precio total</p>
                <span>{producto.cantidad * producto.price} $</span>
            </div>

            <button className="btn btn-outline-danger" onClick={borrarDelCarrito}><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default CarritoCard