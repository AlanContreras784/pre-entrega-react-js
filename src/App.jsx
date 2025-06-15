import { useEffect} from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import FormularioProducto from './components/FormularioProducto';
import FormularioEdicion from './components/FormularioEdicion';
import { useAuthContext } from './contexts/AuthContext';


function App() {

  const {verificacionLog, admin} = useAuthContext();

  useEffect(() => {
    verificacionLog()
  }, [])

  
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
            <Route path="/admin/agregarProductos" element={<FormularioProducto/>}/>
            <Route path='/admin/editarProducto/:id' element={<FormularioEdicion/>}/>
            
          </Routes>
          <Footer/>
        </Router>
      </div>
    
  )
}

export default App