import React from 'react';
import './product-component.css';


interface Product {
    name: string;
    imageURL: string;
    description: string;
  }
  
  // Reusable Product Card Component
  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.imageURL} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    );
  };

// Parent Component - Product List
const ProductList = () => {
  // Array of products
  const products = [
    { name: 'Tide Powder', imageURL: './public/tide.jpg', description: 'Tide Original Scent Powder Laundry Detergent is concentrated with even more stain fighting power packed into a smaller box, so you can use 1/3 less. Tide Laundry Detergent is the #1 stain-fighting regular powder detergent.' },
    { name: 'Apple', imageURL: './public/apple.jpeg', description: 'Description: Deshi Apple' },
    { name: 'Grape', imageURL: './public/grape.jpg', description: 'Description: Deshi Grape' },
    { name: 'mango', imageURL: './public/mango.jpeg', description: 'Description: Deshi Mango' },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
