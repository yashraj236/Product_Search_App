import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;