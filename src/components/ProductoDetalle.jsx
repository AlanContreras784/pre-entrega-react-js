import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoContext } from "../contexts/CarritoContext";
import { Button } from "react-bootstrap";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";

function ProductoDetalle({}) {
  const {agregarAlCarrito} = useContext(CarritoContext);
  const {admin}= useAuthContext();
  const {obtenerUnProducto, productoSeleccionado, eliminarProducto} = useProductosContext();
  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  console.log(id)

  {useEffect(() => {
    obtenerUnProducto(id).then((productoSeleccionado) => {
      setCargando(false);
    }).catch((error) => {
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
    })
  }, [id]);}

  function dispararEliminar(){
    eliminarProducto(id).then(()=>{
      navigate('/productos')
    }).catch((error)=>{
      dispararSweetAlertBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })

  }



  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetAlertBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...productoSeleccionado, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoSeleccionado) return null;

  return (
    <div className="detalle-container">
        <img className="detalle-imagen mx-auto" src={productoSeleccionado.imagen} alt={productoSeleccionado.name} />
      <div className="detalle-info">
        <h2>{productoSeleccionado.name}</h2>
        <small>{productoSeleccionado.description}</small>
        <p>{productoSeleccionado.price} $</p>
        {admin?
          <div>
            <Link to={"/admin/editarProducto/" + id}><Button variant="outline-warning">Editar Producto</Button></Link>
            <Button variant="outline-danger" onClick={dispararEliminar}>Eliminar Producto</Button>
          </div> 
          :
          <div >
            <div>
                <button className="me-3 btn btn-light" onClick={restarContador}>-</button>
                <span>{cantidad}</span>
                <button className="ms-3 btn btn-light" onClick={sumarContador}>+</button>
            </div>
            <div className="d-flex  flex-column ">
              <Button className="mx-auto mb-2 " variant="outline-primary" onClick={funcionCarrito}>Agregar al carrito</Button>
              <Link className="mx-auto mb-2" to={"/productos/"}> <Button variant="outline-success ">Volver a Productos</Button> </Link>
              <Link to={"/carrito"}><Button  variant="outline-warning">Ir a Carrito</Button></Link> 
            </div>  
          </div>
        } 
      </div>
    </div>
  );
}

export default ProductoDetalle;