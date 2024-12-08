'use client'
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AccountCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Account Created:", formData);
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
          <h1 className="text-6xl font-semibold">Create Account</h1>
          <br />
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/account">Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/account/create">Create</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-6 text-center">
          Create Your Account
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Fill in your details below to create a new account.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Create Account
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#FAF4F4] text-black py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* First Column */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">Free Delivery</h1>
              <p className="text-[#9F9F9F] text-xl">
                For all orders over $50, consectetur adipiscing elit.
              </p>
            </div>

            {/* Second Column */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">90 Days Return</h1>
              <p className="text-[#9F9F9F] text-xl">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>

            {/* Third Column */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">Secure Payment</h1>
              <p className="text-[#9F9F9F] text-xl">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccountCreation;
