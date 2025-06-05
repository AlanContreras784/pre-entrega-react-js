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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

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
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={iniciarLoginEmailPass} type="submit">Iniciar Sesión</button>
      <Link to={'/registrarse'}><button>Registrarse</button></Link>
      
    </form>

    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-start">
          <Form.Label >Email:</Form.Label>
          <Form.Control value={usuario} type="text" onChange={(e) => setUsuario(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className='me-4' variant="outline-primary" onClick={iniciarLoginEmailPass} type='submit'>Entrar</Button>
        <Link to={'/registrarse'}><Button variant='primary'>Registrarse</Button></Link>
      </Form>
    </Container>
    </div>
  );
}
export default Login;