import { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/Contacto.css'
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <Container className='mt-5 d-flex justify-content-center align-items-center mb-5'>
      <Card style={{ width: "24rem" }}>
          <Card.Body>
          <Card.Title className="mb-3 text-center"><h2>Escribenos...!</h2></Card.Title>
          <Card.Subtitle><h3 className='lead'>Ponte en contacto con nosotros!</h3></Card.Subtitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-start">
              <FloatingLabel controlId="floatingInput" label='Nombre:' className="mb-4">
                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre:" />
              </FloatingLabel>  
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <FloatingLabel controlId="floatingInput" label='Email:' className="mb-4">
                <Form.Control value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email:' />
              </FloatingLabel>  
            </Form.Group>
            <Form.Group className="mb-3 text-start">
                <FloatingLabel controlId="floatingInput" label='Mensaje:' className="mb-4">
                <Form.Control as="textarea"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribí tu mensaje..."
                  rows="4"
                ></Form.Control>
                </FloatingLabel>
            </Form.Group>
            <Button className='me-4 mb-3' variant="outline-primary"  type='submit'>Enviar</Button>
          </Form>
          </Card.Body>
        </Card>
    </Container>
  );
}

export default FormularioConSweetAlert;