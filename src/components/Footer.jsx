import "../styles/Footer.css";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoFooter from '../assets/img/logo_cero_huella.png'
import { Container } from "react-bootstrap";

function Footer() {  
    return (  
        <footer className="footer conteiner-fluid d-flex flex-column  py-3 mx-0">
                <Container fluid className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center mt-0 ms-0 col-md-3">
                        <img className="pt-3 img-footer img-fluid" src={logoFooter} alt="" />
                    </div>
                    <address className="col-12 col-md-4 mt-4 px-3">
                        <p className="text-center">cerohuella@gmail.com</p>
                        <p className="text-center">11-12345678</p>
                        <p>caba-Argentina</p>
                    </address>
                    <div className="col-6  col-md-2 mt-4">
                        <h5 className="text-center">CONTENIDO</h5>
                        <Nav className=" row-cols-xl-auto">
                            <ul>
                            <li><Nav.Link className="p-0" href="#home">Home</Nav.Link>
                                
                            </li>
                                
                            <li><Nav.Link className="p-0" href="#link">Link</Nav.Link>
                            </li>
                            <li>
                            <NavDropdown className="p-0" title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            </li>
                                
                            </ul>
                           
                        </Nav>
                    </div>
                    <div className="col-6 col-md-3 mt-4">
                        <h5 className=" pt-0 pb3">REDES SOCIALES</h5>
                        <Nav className="d-flex w-75 mx-auto justify-content-evenly align-items-center  ">
                            <Nav.Link className="" href="#link"><i class="fa-brands fa-instagram"></i></Nav.Link>
                            <Nav.Link className="" href="#link"><i class="fa-brands fa-tiktok"></i></Nav.Link>
                            <Nav.Link className="" href="#home"><i class="fa-brands fa-facebook"></i></Nav.Link>
                            <Nav.Link className="" href="#link"><i class="fa-brands fa-x-twitter"></i></Nav.Link>
                        </Nav>
                    </div>
            </Container>
            <p className="w-auto">&copy; 2025 - Mi Aplicación React</p>  
            
        </footer>  
    );  
}  

export default Footer;  