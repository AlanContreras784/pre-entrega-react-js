import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import FormularioConSweetAlert from './components/FormularioConSweetAlert';
import ProductoDetalle from './components/ProductoDetalle';
import Admin from './components/Admin';
import Login from './components/Login';
import { dispararSweetAlertBasico } from "./assets/SweetAlert";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [adminLogueado, setAdminLogueado] = useState(false);

  function funcionCarrito(producto){
    const existe = productosCarrito.find(p => p.id === producto.id);
    console.log(existe)
    if (existe) {
        const carritoActualizado = productosCarrito.map((p) => {
            if (p.id === producto.id){
                const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                return productoActualizado
            }else{
                return p
            }
        })
        setProductosCarrito(carritoActualizado)
    }else{
        // Si no existe, lo agregamos con su cantidad
        const nuevoCarrito = [...productosCarrito, producto];
        setProductosCarrito(nuevoCarrito)
    }

  }

  function borrarProductoCarrito(id){
    console.log(id)
    dispararSweetAlertBasico("Producto Eliminado", "El producto fue borrado con éxito del carrito", "error", "Cerrar");
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  function ManejarAdmin(){
    setAdminLogueado(!adminLogueado)
  }

  function ManejarUser(){
    setUsuarioLogueado(!usuarioLogueado)
  }
  
  return (
    
      <div>
        <Router>
          <Header productosCarrito={productosCarrito}/>
          <Routes>
            
            <Route path="/pre-entrega-react-js/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login  user={usuarioLogueado} admi={adminLogueado} setLogueadoAdmi={ManejarAdmin} setLogueadoUser={ManejarUser}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<FormularioConSweetAlert/>}/>
            <Route path="/productos" element={<ProductosContainer functionCarrito={funcionCarrito}/>} />
            <Route path="/carrito" element={usuarioLogueado?  <Carrito productosCarrito={productosCarrito} funcionBorrar={borrarProductoCarrito} vaciarCarrito={()=> setProductosCarrito([])}/> : <Navigate to={"/login"} replace/>}/>
            <Route path="/productos/:id" element={<ProductoDetalle funcionCarrito={funcionCarrito} />} />
            <Route path="/admin" element={adminLogueado? <Admin/> : <Navigate to= {"/login"} replace/>}/>
            
          </Routes>
          <Footer/>
        </Router>
      </div>
    
  )
}

export default App