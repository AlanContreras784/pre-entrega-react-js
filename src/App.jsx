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


function App() {

  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [adminLogueado, setAdminLogueado] = useState(false);

  function ManejarAdmin(){
    setAdminLogueado(!adminLogueado)
  }

  function ManejarUser(){
    setUsuarioLogueado(!usuarioLogueado)
  }
  
  return (
    
      <div>
        <Router>
          <Header/>
          <Routes>
            
            <Route path="/pre-entrega-react-js/" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login  user={usuarioLogueado} admi={adminLogueado} setLogueadoAdmi={ManejarAdmin} setLogueadoUser={ManejarUser}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacto" element={<FormularioConSweetAlert/>}/>
            <Route path="/productos" element={<ProductosContainer/>} />
            <Route path="/carrito" element={<Carrito usuarioLogueado={usuarioLogueado}/> }/>
            <Route path="/productos/:id" element={<ProductoDetalle/>} />
            <Route path="/admin" element={adminLogueado? <Admin/> : <Navigate to= {"/login"} replace/>}/>
            
          </Routes>
          <Footer/>
        </Router>
      </div>
    
  )
}

export default App