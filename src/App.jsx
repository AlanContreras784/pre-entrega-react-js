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
import Registrarse from './components/Registrarse';


function App() {

  
  return (
    
      <div>
        <Router>
          <Header/>
          <Routes>
            
            <Route path="/pre-entrega-react-js/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/registrarse' element={<Registrarse/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<FormularioConSweetAlert/>}/>
            <Route path="/productos" element={<ProductosContainer/>} />
            <Route path="/carrito" element={<Carrito/> }/>
            <Route path="/productos/:id" element={<ProductoDetalle/>} />
            <Route path="/admin" element={<Admin/>}/>
            
          </Routes>
          <Footer/>
        </Router>
      </div>
    
  )
}

export default App