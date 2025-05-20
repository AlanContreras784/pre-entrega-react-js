export default function Login({setLogueadoUser, setLogueadoAdmi, user, admi}){
    return(
        <div>
            <button onClick={setLogueadoUser}>{user? "Cerrar Sesión" : "Iniciar Sesión"}</button>
            <button onClick={setLogueadoAdmi}>{admi? "Cerrar como Admin" : "Iniciar como Admin"}</button>
        </div>
    )
}