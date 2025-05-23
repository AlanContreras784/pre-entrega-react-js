import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductoDetalle({ funcionCarrito }) {
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

  function agregarAlCarrito() {
    if (cantidad < 1) return;
    dispararSweetAlertBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    funcionCarrito({ ...producto, cantidad });
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
        <button className="mx-auto btn btn-outline-secondary " onClick={agregarAlCarrito}>Agregar al carrito</button>
        <Link className="mx-auto" to={"/productos/"}> <button className="mt-3  btn btn-outline-warning ">Volver a Productos</button> </Link>
      </div>
    </div>
  );
}

export default ProductoDetalle;