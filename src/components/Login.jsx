/* import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({setLogueadoUser, setLogueadoAdmi, user, admi}){
    return(
        <div>
            <button className="btn btn-outline-primary mx-3 my-5 fs-5"  onClick={setLogueadoUser}>{user? "Cerrar Sesión" : "Iniciar Sesión"}</button>
            <button className="btn btn-outline-warning mx-3 my-5 fs-5" onClick={setLogueadoAdmi}>{admi? "Cerrar como Admin" : "Iniciar como Admin"}</button>
        </div>
    )
} */
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
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



  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Usuario:</label>
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
      <button type="submit">Iniciar Sesión</button>
      <Link to={'/registrarse'}><button>Registrarse</button></Link>
      
    </form>
  );
}
export default Login;