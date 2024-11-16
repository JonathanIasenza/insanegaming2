import React, { useState, useEffect } from "react";
import { fetchProducts } from "../firebaseServices";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import '../styles/SectionContainer.css';

const Sections = ({ activeCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div style={{padding: '2%', textAlign:'center'}}>
          <h3>{filteredProducts.map((product) => (product.title))}</h3>
          <Row style={{padding: '5%'}}>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Precio: ${product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default Sections;
