import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contacto.css'

function FormularioConSweetAlert() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Expresion Regular
  const emailEsValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valido Campos completos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'POr favor completar todos los campos',
      });
      return;
    }

    // Validar formato de email
    if (!emailEsValido(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email no es valido',
        text: 'Ingresá un email con formato valido.',
      });
      return;
    }

    // Si todo está OK y no hay ningun return
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado',
      text: `Gracias, ${nombre}. Te responderemos pronto.`,
    });

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <form className='py-5 formulario' onSubmit={handleSubmit} >
      <h1>Escribenos...!</h1>
      <h3 className='lead'>Ponte en contacto con nosotros!</h3>

      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
        />
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribí tu mensaje..."
          rows="4"
        ></textarea>
      </div>

      <button className='btn btn-outline-primary' type="submit" style={{ padding: '10px 20px' }}>
        Enviar
      </button>
    </form>
  );
}

export default FormularioConSweetAlert;