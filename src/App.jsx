import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import FormularioConSweetAlert from './components/FormularioConSweetAlert';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])

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
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  
  return (
    
      <div>
        <Router>
          <Header productosCarrito={productosCarrito}/>
          <Routes>
            
            <Route path="/pre-entrega-react-js/" element={<Home/>} />
            <Route path="/pre-entrega-react-js/about" element={<About/>}/>
            <Route path="/pre-entrega-react-js/contacto" element={<FormularioConSweetAlert/>}/>
            <Route path="/pre-entrega-react-js/productos" element={<ProductosContainer functionCarrito={funcionCarrito}/>} />
            <Route path="/pre-entrega-react-js/carrito" element={<Carrito productosCarrito={productosCarrito} funcionBorrar={borrarProductoCarrito}/>}/>
            <Route path="/pre-entrega-react-js/productos/:id" element={<ProductoDetalle funcionCarrito={funcionCarrito} />} />
            
          </Routes>
          <Footer/>
        </Router>
      </div>
    
  )
}

export default App