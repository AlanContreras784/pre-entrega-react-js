import  { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { loginEmailPass } from '../Auth/firebase';
import { Button,Form, Container } from 'react-bootstrap';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, user } = useAuthContext();
  const navigate = useNavigate();

  
  const handleSubmit2 =(e)=>{
        logout()
  }

  if(user==="admin"){
    return(
        <form onSubmit={handleSubmit2}>
          <button type='submit'>Cerrar Sesion</button>
        </form>
    )
  }

  function iniciarLoginEmailPass(e){
      e.preventDefault();
      loginEmailPass(usuario,password).then((user)=>{
        login(usuario);
        navigate('/');
      }).catch((error)=>{
        alert('error')
      }
    )
  }



  return (

    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
      <Form >
        <Form.Group className="mb-3 text-start">
          <Form.Label >Email:</Form.Label>
          <Form.Control value={usuario} type="text" onChange={(e) => setUsuario(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className='me-4 mb-5' variant="outline-primary" onClick={iniciarLoginEmailPass} type='submit'>Entrar</Button>
        <Link to={'/registrarse'}><Button className='mb-5' variant='primary'>Registrarse</Button></Link>
      </Form>
    </Container>
  );
}
export default Login;