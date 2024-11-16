import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { fetchProducts } from '../firebaseServices';

const ProductGrid = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setFilteredProducts(data);
      setLoading(false);
    };

    loadProducts();
  }, [])
  
  return (
    <Container>
      <h2 className="my-4">Productos</h2>
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product?.id} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product?.image[0]} alt={product?.name} />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>Precio: ${product?.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductGrid;
