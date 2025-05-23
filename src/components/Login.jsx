import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({setLogueadoUser, setLogueadoAdmi, user, admi}){
    return(
        <div>
            <button className="btn btn-outline-primary mx-3 my-5 fs-5"  onClick={setLogueadoUser}>{user? "Cerrar Sesión" : "Iniciar Sesión"}</button>
            <button className="btn btn-outline-warning mx-3 my-5 fs-5" onClick={setLogueadoAdmi}>{admi? "Cerrar como Admin" : "Iniciar como Admin"}</button>
        </div>
    )
}