import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="product-details">
      <h2>Detalles del Producto {id}</h2>
      <p>Aquí se mostrarán detalles, imágenes e información del producto.</p>
      <button onClick={() => window.open('https://wa.me/1167221543', '_blank')}>Contactar por WhatsApp</button>
    </div>
  );
};

export default ProductDetails;
