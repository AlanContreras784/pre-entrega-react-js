import Logo from "../assets/img/Logo Cero Huella Horiz.png"
import "../styles/Header.css"
import {Container, Navbar, Nav, Badge, NavDropdown, Offcanvas, Form, Button} from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from "../contexts/AuthContext";

function Header() {
    const {user, admin, logout}= useAuthContext()
    const {productosCarrito} = useContext(CarritoContext)
    const navigate= useNavigate()

    function handleNavigateLogin(){
        navigate('/login');
    }

    function handleLogout(){
        logout();
    }

    return (
        <header className="header ">
            {/* <Navbar collapseOnSelect expand="lg" variant="dark"  className="fs-5 py-0">
                <Container fluid>
                    <Navbar.Brand as={Link} to={'/'} href="#home"><img className="logo  me-auto" src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#" as={Link} to={'/'} className='me-auto nav-link'>Home</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/productos'} className='me-auto nav-link'>Productos</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/contacto'} className='me-auto nav-link'>Contacto</Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/about'} className='me-auto nav-link'>Nosotros</Nav.Link>
                                {admin ? <Nav.Link href="#" as={Link} to={'/admin'} className='me-auto nav-link'>Admin</Nav.Link> : <></> } 
                                <Nav.Link href="#" as={Link} to={'/carrito'} className='me-auto nav-link position-relative'><i class="fa-solid fa-cart-shopping"></i><Badge pill bg="danger" className="position-absolute top-1 start-100 translate-middle">{productosCarrito.length>0 ? productosCarrito.length : ""}</Badge>
                                </Nav.Link>
                                <Nav.Link href="#" as={Link} to={'/login'} className='me-auto nav-link'><button className="btn btn-secondary border-boton ms-3" onClick={ !user? handleNavigateLogin : handleLogout}>{ !user ? 'Login' : 'Logout'}</button></Nav.Link>
                                {admin ? <Nav.Link href="#" as={Link} to={'/admin/agregarProductos'} className='me-auto nav-link'>Agregar Productos</Nav.Link> : <></>}
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand='lg' className="bg-body-primary mb-3 fs-6 py-2 " variant="dark">
                <Container className="mt-1 mb-1" fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    backdrop='static'
                    className='ps-2'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end  flex-grow-1 pe-3">
                            <Nav.Link href="#" as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link href="#" as={Link} to={'/productos'} className='aling-items-center '>Productos</Nav.Link>
                            <Nav.Link href="#" as={Link} to={'/contacto'} className='nav-link'>Contacto</Nav.Link>
                            <Nav.Link href="#" as={Link} to={'/about'} className='nav-link'>Nosotros</Nav.Link>
                            {admin ? <Nav.Link href="#" as={Link} to={'/admin'} className='nav-link'>Admin</Nav.Link> : <></> } 
                            <Nav.Link href="#" as={Link} to={'/carrito'} className='nav-link position-relative'><i class="fa-solid fa-cart-shopping"><Badge pill bg="danger" className="position-absolute top-1 start-100 translate-middle">{productosCarrito.length>0 ? productosCarrito.length : ""}</Badge></i>
                            </Nav.Link>
                            <Nav.Link href="#" as={Link} to={'/login'} className='me-auto nav-link'><button className="btn btn-secondary border-boton ms-3" onClick={ !user? handleNavigateLogin : handleLogout}>{ !user ? 'Login' : 'Logout'}</button></Nav.Link>
                            {admin ? <Nav.Link href="#" as={Link} to={'/admin/agregarProductos'} className='me-auto nav-link'>Agregar Productos</Nav.Link> : <></>}
                            <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-lg`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 my-2"
                                    aria-label="Search"
                                />
                                <Button className="my-2" variant="light">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    
    );
}

export default Header;