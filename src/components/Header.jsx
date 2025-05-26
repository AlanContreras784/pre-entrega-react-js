import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-bootstrap";
import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';

function Header() {
    const {productosCarrito} = useContext(CarritoContext)
    return (
        <header className="header ">
            <Navbar collapseOnSelect expand="lg" variant="dark"  className="fs-5 py-0">
                <Container fluid>
                    <Navbar.Brand href="#home"><img className="logo  me-auto" src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/">Home</Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/about">Nosotros</Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/productos">Productos</Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/contacto">Contacto</Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="mx-0 px-2 me-auto  nav-link" to="/carrito"><i class="fa-solid fa-cart-shopping"></i><small className='color-cantidad px-1'>{productosCarrito.length>0 ? productosCarrito.length : ""}</small></Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/admin">Admin</Link></Nav.Link>
                            <Nav.Link href='#' className='me-auto'><Link className="me-auto nav-link" to="/login">Login</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;