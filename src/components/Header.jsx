import { NavLink } from "react-bootstrap";
import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header({productosCarrito}) {
    return (
        <header className="header ">
            <Navbar variant="dark" expand="lg" className="fs-5 py-0">
                
                    <Navbar.Brand href="#home"><img className="logo  me-auto" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " className="ms-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="me-auto nav-link" to="/">Home</Link>
                            <Link className="me-auto nav-link" to="/about">Nosotros</Link>
                            <Link className="me-auto nav-link" to="/productos">Productos</Link>
                            <Link className="me-auto nav-link" to="/contacto">Contacto</Link>
                            <Link className=" iconCarrito mx-0 px-4 me-auto  nav-link" to="/carrito"><i class="fa-solid fa-cart-shopping"></i><small>{productosCarrito.length>0 ? productosCarrito.length : ""}</small></Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                    
                
            </Navbar>
        </header>
    
    );
}

export default Header;