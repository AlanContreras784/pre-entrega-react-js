import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/img/carousel_01.jpg';
import imagen2 from '../assets/img/carousel_02.jpg';
import imagen3 from '../assets/img/carousel_03.jpg';
import imagen4 from '../assets/img/carousel_04.jpg';
import '../styles/Carousel.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CarouselInicio() {
  return (
    <Carousel className=''>
      <Carousel.Item>
        <img src='https://i.postimg.cc/FHYKVPwD/plantas_1920.jpg'/>
        <Carousel.Caption className='bottom-10'>
          {/* <h3>Tecnología al alcance de tu hogar</h3>
          <p>
            Descubre una experiencia de compra simple y segura, con productos innovadores que se adaptan a tu estilo de vida digital.
          </p> */}
          <h1 class="text-center mx-auto">UN COMPROMISO CON EL PLANETA</h1>
          <img
            class="logoRockVerde img-fluid w-25 mx-auto mb-2"
            src="https://i.postimg.cc/gJsdWRfx/R&V_Logo_Verde_1024(2).png"
            alt=""
          />
        <div class="divBlur  text-center mx-auto pb-3">
          <p class="p-3">
            Innovación que respeta el medio ambiente. Creamos piezas únicas que
            minimizan nuestra huella ecológica.
          </p>
          <Button variant='outline-success'><Link className='nav-link ' to={"./productos"} 
            >NUESTROS PRODUCTOS
          </Link></Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={imagen2}/>
        <Carousel.Caption className=''>
          <h3>Compra rápida desde tu móvil</h3>
          <p>Accede a nuestras ofertas exclusivas y compra con un solo clic desde cualquier lugar, 24/7.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://i.postimg.cc/0N0bn1w7/reutilizables-carrusel.jpg'/>
        <Carousel.Caption className=''>
          <h3> Fotografía de producto profesional</h3>
          <p>Tu escaparate digital merece lo mejor. Inspírate en cómo mostrar tus productos de forma atractiva y profesional.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen3}/>
        <Carousel.Caption className=''>
          <h3>Moda inteligente, estilo auténtico</h3>
          <p>
            Encuentra ropa y accesorios únicos mientras disfrutas de una compra cómoda y personalizada desde donde estés.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;