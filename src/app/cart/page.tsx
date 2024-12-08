'use client'
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 30, quantity: 1 },
    { id: 2, name: "Product 2", price: 50, quantity: 2 },
    { id: 3, name: "Product 3", price: 20, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: "url('/bg2.jpeg')" }} // Replace with your preferred image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black">
          <h1 className="text-6xl font-semibold">Cart</h1>
          <br />
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Cart Content Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-6 text-center">Your Cart</h2>

        {cartItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">Product</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Total</th>
                  <th className="py-3 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6">{item.name}</td>
                    <td className="py-3 px-6">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-3 px-6">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-lg text-gray-600 text-center">
            Your cart is empty. Start shopping now!
          </p>
        )}

        {/* Cart Total */}
        {cartItems.length > 0 && (
          <div className="mt-10 text-right">
            <p className="text-2xl font-semibold">
              Total: <span className="text-black">${calculateTotal().toFixed(2)}</span>
            </p>
            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

