import React from "react";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
