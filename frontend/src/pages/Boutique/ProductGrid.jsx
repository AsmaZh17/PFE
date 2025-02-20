import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Women's Top", price: "$50.00", oldPrice: "$35.00", image: "../assets/images/ecommerce/01.jpg" },
  { id: 2, name: "Men's Jacket", price: "$45.00", oldPrice: "$50.00", image: "../assets/images/ecommerce/02.jpg" },
  // Ajoutez plus de produits ici
];

const ProductGrid = () => {
  return (
    
    <div className="product-wrapper-grid">
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;