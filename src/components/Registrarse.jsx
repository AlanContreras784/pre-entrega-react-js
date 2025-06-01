import "bootstrap/dist/css/bootstrap.min.css";
import { crearUsuario } from "../Auth/firebase";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from "react";

function Registrarse() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useAuthContext();
    const navigate = useNavigate();


    function registrarUsuario(e){
        e.preventDefault();
        crearUsuario(usuario, password);
        login(usuario);
        navigate('/login');
    }
    return (
        <form onSubmit={registrarUsuario}>
            <h2>Registrarse</h2>
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
            <button  type="submit">Registrarse</button>
        </form>
    );
}

export default Registrarse;
