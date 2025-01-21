'use client';

import { allproduct } from '@/sanity/lib/quries';
import { Products } from '../../../types/products';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url';

const builder = createImageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const Shop = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [cart, setCart] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProducts: Products[] = await client.fetch(allproduct);
      setProducts(fetchedProducts);
    }
    fetchProduct();
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Products) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`Item "${product.title}" added to the cart!`); // Show alert message
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Shop Our Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {/* Check if the image exists */}
            {product.image?.asset?._ref ? (
              <Image
                src={urlFor(product.image.asset._ref).url() || '/fallback.png'} // Fallback URL if the image is not available
                alt={product.title}
                width={300}
                height={300}
                className="object-cover w-full h-64 rounded-t-lg"
              />
            ) : (
              // If there's no image, display a fallback placeholder
              <div className="h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                <span className="text-gray-600">No Image Available</span>
              </div>
            )}
            <h2 className="text-xl font-bold mt-4 text-center">{product.title}</h2>
            <p className="text-gray-500 text-center">{product.price ? `Price: Rs. ${product.price}` : 'Price Not Available'}</p>

            {/* Truncated Description */}
            <p className="text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p> {/* Product Description with line clamp */}

            <button
              onClick={() => handleAddToCart(product)}
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="py-2">
                {item.title} - Rs. {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Shop;
