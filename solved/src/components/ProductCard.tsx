import Image from "next/image";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import an icon from react-icons
import { Product } from "../pages/api/products";
import { useCartStore } from "../useCartStore";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.image);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleError = () => {
    setImgSrc("/images/default-fallback-image.png");
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex items-center space-x-4 border rounded-xl">
      <div className="relative w-1/3 h-full">
        <Image
          src={imgSrc}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl"
          onError={handleError}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA
          AAAFCAYAAACNbyblAAAAHElEQVQI12P4
          //8/w38GIAXDIBKE0DHxgljNBAAO
          9TXL0Y4OHwAAAABJRU5ErkJggg==" // Example base64-encoded image
        />
      </div>
      <div className="px-4 w-2/3">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button
          className="flex items-center space-x-2 mb-2"
          onClick={handleAddToCart}
        >
          <FaShoppingCart /> {/* Use the imported icon */}
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
