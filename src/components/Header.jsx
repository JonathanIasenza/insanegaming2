import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

  const Header = ({ setActiveCategory }) => {
    const handleSearchChange = (e) => {
    };

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Cambia la categoría activa cuando el usuario hace clic
  };


  return (
    <Navbar expand="lg" className="header navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span>🎮 Insane Gaming</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/pcs" onClick={() => handleCategoryChange("pcs")}>
              PC's Armadas
            </Nav.Link>
            <Nav.Link as={Link} to="/consolas" onClick={() => handleCategoryChange("consolas")}>
              Consolas
            </Nav.Link>
            <Nav.Link as={Link} to="/graficas" onClick={() => handleCategoryChange("graficas")}>
              Gráficas
            </Nav.Link>
            <Nav.Link as={Link} to="/perifericos" onClick={() => handleCategoryChange("perifericos")}>
              Periféricos
            </Nav.Link>
            <Nav.Link as={Link} to="/utilidades" onClick={() => handleCategoryChange("utilidades")}>
              Utilidades
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">Preguntas Frecuentes</Nav.Link>
            <Nav.Link as={Link} to="/location">¿Dónde estamos?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
