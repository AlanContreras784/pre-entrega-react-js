import { crearUsuario } from "../Auth/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from "react";
import { Alert, Button, Card, Container, Form, } from "react-bootstrap";
import { dispararSweetAlertBasico } from "../assets/SweetAlert";

function Registrarse() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login} = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState();


    function registrarUsuario (e) {
        e.preventDefault();
        crearUsuario(usuario, password).then((user) => {
            login(usuario)
            dispararSweetAlertBasico("Registro exitoso", "", "success", "Confirmar")
            navigate('/login')
            }).catch((error) => {
            if(error.code == "auth/invalid-credential"){
                dispararSweetAlertBasico("Credenciales incorrectas", "", "error", "Cerrar")
                setError("Credenciales incorrectas")
            }if(error.code == "auth/weak-password"){
                dispararSweetAlertBasico("Contraseña debil", "La contraseña debe tener al menos 6 caracteres", "error", "Cerrar")
                setError("La contraseña debe tener al menos 6 caracteres")
            }if(error.code == "auth/invalid-email"){
                dispararSweetAlertBasico("Error", "Email inválido", "error", "Cerrar")
                setError("Email inválido")
            }if(error.code == "auth/missing-password"){
                dispararSweetAlertBasico("Error", "Contraseña inválida", "error", "Cerrar")
                setError("Contraseña inválida")
            }if(error.code == "auth/email-already-in-use"){
                dispararSweetAlertBasico("Error", "Correo Electrónico ya en uso", "error", "Cerrar")
                setError("Correo Electrónico ya en uso")
            }
        //alert("Error")
        })
    }
    return (

        <Container className="mt-5 mb-5 d-flex justify-content-center align-items-center" style={{ maxWidth: 400 }}>
            <Card className='shadow-lg' style={{ width: "24rem" }}>
                <Card.Body>
                <Card.Title className="mb-3 text-center"><h2>Registrarse</h2></Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
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
                <Link to={'/'}><Button className="mb-3" variant='outline-primary'>Login in</Button></Link>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Registrarse;
