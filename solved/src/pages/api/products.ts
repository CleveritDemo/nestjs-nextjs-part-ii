import { NextApiRequest, NextApiResponse } from "next";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  function getMockProducts() {
    const products: Product[] = [
      {
        id: "1",
        name: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
        price: 19.99,
      },
      {
        id: "2",
        name: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
        price: 29.99,
      },
      {
        id: "3",
        name: "Product 3",
        description: "Description for Product 3",
        image: "https://via.placeholder.com/150",
        price: 39.99,
      },
      {
        id: "4",
        name: "Product 4",
        description: "Description for Product 4",
        image: "https://via.placeholder.com/150",
        price: 49.99,
      },
      {
        id: "5",
        name: "Product 5",
        description: "Description for Product 5",
        image: "https://via.placeholder.com/150",
        price: 59.99,
      },
    ];

    return products;
  }

  return res.status(200).json({ products: getMockProducts() });
}
