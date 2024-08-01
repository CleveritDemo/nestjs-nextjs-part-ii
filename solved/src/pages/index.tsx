import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "./api/products";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        const { products } = data;

        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!loading &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {loading && <p>Loading products...</p>}
      </div>
    </div>
  );
};

export default HomePage;
