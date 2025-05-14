import { Link } from 'react-router-dom';

function Nav2() {  
    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>  
                <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Me</Link></li> 
                <li><Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</Link></li>
                <li><Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link></li> 
                <li><Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>Carrito</Link></li>  
            </ul>  
        </nav>
    );  
}


export default Nav2; 