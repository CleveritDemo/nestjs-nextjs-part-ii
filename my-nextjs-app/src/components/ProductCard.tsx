// src/components/ProductCard.tsx
import React, { useState } from 'react';
import { Producto } from '../utils/getProductos';
import useTranslation from 'next-translate/useTranslation';
import { useCartStore } from '../store/useCartStore';

type ProductCardProps = {
  producto: Producto;
};

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  const { t } = useTranslation('common');
  const [imgSrc, setImgSrc] = useState(producto.imagen);
  const addItem = useCartStore((state) => state.addItem);

  const handleError = () => {
    setImgSrc('/path/to/default-fallback-image.png'); // Asegúrate de que la ruta sea correcta
  };

  const handleAddToCart = () => {
    addItem(producto);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imgSrc} alt={producto.nombre} onError={handleError} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{producto.nombre}</div>
        <p className="text-gray-700 text-base">{producto.descripcion}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold">Precio: ${producto.precio}</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          {t('add_to_cart')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;