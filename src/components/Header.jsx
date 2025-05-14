import { NavLink } from "react-bootstrap";
import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header ">
            <Navbar variant="dark" expand="lg" className="fs-5 py-0">
                <Container fluid >
                    <Navbar.Brand href="#home"><img className="logo  me-auto" src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " className="ms-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="me-auto nav-link" to="/">Home</Link>
                            <Link className="me-auto nav-link" to="/about">Nosotros</Link>
                            <Link className="me-auto nav-link" to="/productos">Productos</Link>
                            <Link className="me-auto nav-link" to="/contacto">Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className=" iconCarrito mx-0 px-4  nav-link" to="/carrito"><i class="fa-solid fa-cart-shopping"></i></Link>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;