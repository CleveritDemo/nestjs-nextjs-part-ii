// my-nextjs-app/src/pages/index.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { getMockProductos } from '../utils/getProductos';

const HomePage: React.FC = () => {
  const productos = getMockProductos();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;