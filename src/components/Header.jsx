import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from "../contexts/AuthContext";

function Header() {
    const {user, admin, login, logout}= useAuthContext()
    const {productosCarrito} = useContext(CarritoContext)
    const navigate= useNavigate()

    function handleNavigateLogin(){
        navigate('/login');
    }

    function handleNavigateLogout(){
        logout();
    }

    return (
        <header className="header ">
            <Navbar collapseOnSelect expand="lg" variant="dark"  className="fs-5 py-0">
                <Container fluid>
                    <Navbar.Brand as={Link} to={'/'} href="#home"><img className="logo  me-auto" src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#" as={Link} to={'/'} className='me-auto nav-link'>Home</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/productos'} className='me-auto nav-link'>Productos</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/contacto'} className='me-auto nav-link'>Contacto</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/carrito'} className='me-auto nav-link'><i class="fa-solid fa-cart-shopping"></i><small className='color-cantidad px-1'>{productosCarrito.length>0 ? productosCarrito.length : ""}</small></Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/about'} className='me-auto nav-link'>Nosotros</Nav.Link>
                                {admin ? <Nav.Link href="#" as={Link} to={'/admin'} className='me-auto nav-link'>Admin</Nav.Link> : <></> } 
                                <Nav.Link href="#" as={Link} to={'/login'} className='me-auto nav-link'><button className="btn btn-secondary border-boton" onClick={ !user? handleNavigateLogin : handleNavigateLogout}>{ !user ? 'Login' : 'Logout'}</button></Nav.Link>
                                {admin ? <Nav.Link href="#" as={Link} to={'/admin/agregarProductos'} className='me-auto nav-link'>Agregar Productos</Nav.Link> : <></>}
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;