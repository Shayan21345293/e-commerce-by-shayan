// shop/Cart.tsx (Client Component)

'use client';

import { useState } from 'react';
import { Products } from '../../../types/products';

interface CartProps {
  product: Products;
}

const Cart = ({ product }: CartProps) => {
  const [cart, setCart] = useState<Products[]>([]);

  const handleAddToCart = (product: Products) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`Item "${product.title}" added to the cart!`); // Show alert message
  };

  return (
    <>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>

      {/* Cart Display */}
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
    </>
  );
};

export default Cart;
