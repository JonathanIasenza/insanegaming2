import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/index.css'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <p>📍 Brown 828, Local 19, Galería Brown, Morón</p>
          </Col>
          <Col md={4}>
            <p>📷 <a href="https://www.instagram.com/insanestore.moron" className="text-white" target="_blank" rel="noopener noreferrer">@insanestore.moron</a></p>
          </Col>
          <Col md={4}>
            <p>📞 <a href="https://wa.me/1167221543" className="text-white" target="_blank" rel="noopener noreferrer">1167221543</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
