import { crearUsuario } from "../Auth/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from "react";
import { Button, Container, Form, } from "react-bootstrap";

function Registrarse() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuthContext();
    const navigate = useNavigate();


    function registrarUsuario(e){
        e.preventDefault();
        crearUsuario(usuario, password).then((user)=>{
            login(usuario);
            navigate('/login');
        }).catch((error)=>{
            alert('error')
        })
        
    }
    return (

        <Container className="mt-5" style={{ maxWidth: 400 }}>
                <h2>Registrarse</h2>
                <Form>
                <Form.Group className="mb-3 text-start">
                    <Form.Label >Email:</Form.Label>
                    <Form.Control value={usuario} type="text" onChange={(e) => setUsuario(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='mb-5 me-4' variant="outline-primary" onClick={registrarUsuario} type='submit'>Registrarse</Button>
                <Link to={'/login'}><Button className="mb-5" variant='primary'>Login in</Button></Link>
                </Form>
            </Container>
    );
}

export default Registrarse;
