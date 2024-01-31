
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";
import './InicioImg.css'
import React from 'react'

const InicioImg = () => {
  return (
    <Carousel fade>
      <Carousel.Item className='carrusel'>
        <img src={carrusel1} className="d-block w-100" alt="Slide 1" />
        <Carousel.Caption className='letrasCarrusel1'>
          <h3>Indies games</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrusel'>
        <img src={carrusel2} className="d-block w-100" alt="Slide 2" />
        <Carousel.Caption className='letrasCarrusel2'>
          <h3>RPG games</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrusel'>
        <img src={carrusel3} className="d-block w-100" alt="Slide 3" />
        <Carousel.Caption className='letrasCarrusel3'>
          <h3>And more</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default InicioImg