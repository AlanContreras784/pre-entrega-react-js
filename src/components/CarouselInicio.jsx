import Carousel from 'react-bootstrap/Carousel';
import imagen1 from '../assets/img/img_01.jpg';
import imagen2 from '../assets/img/img_02.jpg';
import imagen3 from '../assets/img/img_03.jpg';
import imagen4 from '../assets/img/img_04.jpg';
import '../styles/Carousel.css'

function CarouselInicio() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={imagen1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  src={imagen2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;