import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../firebaseServices";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.filter((product) => product.category === category));
    };
    loadProducts();
  }, [category]);

  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{`Precio: $${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
