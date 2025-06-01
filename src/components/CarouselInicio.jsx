import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/img/carousel_01.jpg';
import imagen2 from '../assets/img/carousel_02.jpg';
import imagen3 from '../assets/img/carousel_03.jpg';
import imagen4 from '../assets/img/carousel_04.jpg';
import '../styles/Carousel.css'

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imagen3}/>
        <Carousel.Caption className=''>
          <h3>Tecnología al alcance de tu hogar</h3>
          <p>
            Descubre una experiencia de compra simple y segura, con productos innovadores que se adaptan a tu estilo de vida digital.
          </p>
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
        <img src={imagen1}/>
        <Carousel.Caption className=''>
          <h3> Fotografía de producto profesional</h3>
          <p>Tu escaparate digital merece lo mejor. Inspírate en cómo mostrar tus productos de forma atractiva y profesional.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen4}/>
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