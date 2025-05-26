import React,{ useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoContext } from "../contexts/CarritoContext";

function ProductoDetalle({}) {
  const {agregarAlCarrito} = useContext(CarritoContext);

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  {useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const productoEncontrado = data.find((d) =>d.id == id);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);}

  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetAlertBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  return (
    <div className="detalle-container">
        <img className="detalle-imagen mx-auto" src={producto.image} alt={producto.title} />
      <div className="detalle-info">
        <h2>{producto.title}</h2>
        <small>{producto.description}</small>
        <p>{producto.price} $</p>
        <div>
            <button className="me-3 btn btn-light" onClick={restarContador}>-</button>
            <span>{cantidad}</span>
            <button className="ms-3 btn btn-light" onClick={sumarContador}>+</button>
        </div>
        <button className="mx-auto btn btn-outline-primary " onClick={funcionCarrito}>Agregar al carrito</button>
        <Link className="mx-auto" to={"/productos/"}> <button className=" btn btn-outline-success ">Volver a Productos</button> </Link>
        <Link to={"/carrito"}><button  className="btn btn-outline-warning">Ir a Carrito</button></Link>      
      </div>
    </div>
  );
}

export default ProductoDetalle;