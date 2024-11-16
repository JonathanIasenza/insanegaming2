import React from 'react';
import Carousel from './Carousel';
import ProductGrid from './ProductGrid';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Carousel />
      <ProductGrid />
    </Container>
  );
};

export default Home;
