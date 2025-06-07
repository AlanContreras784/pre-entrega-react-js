import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";
// Crear el contexto de autenticación
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);


  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;
    if(username=="admin@gmail.com"){
        setAdmin(true);
    }
    localStorage.setItem('authToken', token);
    setUser(username);
  };
  const logout = () => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "¡Quieres cerrar sesión!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar!",
        cancelButtonText: "Cancelar",
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Ok!",
            text: "Cerraste sesión.",
            icon: "success"
            });
            localStorage.removeItem('authToken');
            setUser(null);
            setAdmin(false)
        }
    });

  };
  return (
    <AuthContext.Provider value={{ user, login, logout, admin }}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);