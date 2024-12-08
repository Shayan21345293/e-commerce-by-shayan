'use client'
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    region: "",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout Details:", formData);
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
          <h1 className="text-6xl font-semibold">Checkout</h1>
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
                <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Checkout Form Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-6 text-center">
          Complete Your Purchase
        </h2>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="companyName">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your company name"
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your country"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="region">
                Region
              </label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your region"
                required
              />
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your street address"
              required
            />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="townCity">
                Town/City
              </label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                value={formData.townCity}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your town or city"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="province">
                Province
              </label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your province"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="zipCode">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                placeholder="Enter your zip code"
                required
              />
            </div>
          </div>

          {/* Row 6 */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your phone number"
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

          {/* Product Total */}
          <div className="text-lg font-medium mt-8">
            <p>Product Total: <span className="font-bold">$120.00</span></p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 mt-4"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
