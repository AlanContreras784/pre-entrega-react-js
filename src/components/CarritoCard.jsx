import "../styles/Carrito.css"
import Swal from 'sweetalert2'
import Carrito from "./Carrito";

function CarritoCard({producto, funcionDisparadora}){
    
    function borrarDelCarrito() {
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
            title: "Estas seguro ?",
            text: "Quieres Elimar este producto del Carrito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, Eliminalo!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "Su producto ha sido eliminado del Carrito.",
                icon: "success",
                });
            funcionDisparadora(producto.id)
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Tu producto no fue eliminado :)",
                icon: "error"
                });
            }
        });
        
    }

    return(
        <div key={producto.id} className="carrito-card " >
            <h4 className="carrito-titulo fs-5">{producto.name}</h4>
            <img className="carrito-image" src={producto.imagen}></img>
            <span className="m-1">Cantidad: {producto.cantidad}</span>
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