import React from 'react';
import { Carousel } from 'react-bootstrap';
import Imagen from '../images/carouselPruebaPromo.png'

const PromotionsCarousel = () => {
  return (
    <Carousel className="my-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen}
          alt=""
        />
        <Carousel.Caption>
          {/* <h3>¡Ofertas increíbles!</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="/promo2.jpg"
          alt="Promoción 2"
        />
        <Carousel.Caption>
          <h3>Placas de Video en Oferta</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default PromotionsCarousel;
