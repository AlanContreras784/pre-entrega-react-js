import { crearUsuario } from "../Auth/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from "react";
import { Button, Card, Container, Form, } from "react-bootstrap";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";

function Registrarse() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login} = useAuthContext();
    const navigate = useNavigate();


    function registrarUsuario (e) {
        e.preventDefault();
        crearUsuario(usuario, password).then((user) => {
            login(usuario)
            dispararSweetAlertBasico("Logeo exitoso", "", "success", "Confirmar")
            navigate('/login')
            }).catch((error) => {
            if(error.code == "auth/invalid-credential"){
                dispararSweetAlertBasico("Credenciales incorrectas", "", "error", "Cerrar")
            }if(error.code == "auth/weak-password"){
                dispararSweetAlertBasico("Contraseña debil", "La contraseña debe tener al menos 6 caracteres", "error", "Cerrar")
            }if(error.code == "auth/invalid-email"){
                dispararSweetAlertBasico("Error", "Email inválido", "error", "Cerrar")
            }if(error.code == "auth/missing-password"){
                dispararSweetAlertBasico("Error", "Contraseña inválida", "error", "Cerrar")
            }if(error.code == "auth/email-already-in-use"){
                dispararSweetAlertBasico("Error", "Correo Electrónico ya en uso", "error", "Cerrar")
            }
        //alert("Error")
        })
    }
    return (

        <Container className="mt-5 mb-5 d-flex justify-content-center align-items-center" style={{ maxWidth: 400 }}>
            <Card style={{ width: "24rem" }}>
                <Card.Body>
                <Card.Title className="mb-3 text-center"><h2>Registrarse</h2></Card.Title>
                <Form onSubmit={registrarUsuario}>
                <Form.Group className="mb-3 text-start">
                    <Form.Label >Email:</Form.Label>
                    <Form.Control value={usuario} type="text" onChange={(e) => setUsuario(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='mb-3 me-4' variant="primary" type='submit'>Registrarse</Button>
                <Link to={'/login'}><Button className="mb-3" variant='outline-primary'>Login in</Button></Link>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registrarse;
