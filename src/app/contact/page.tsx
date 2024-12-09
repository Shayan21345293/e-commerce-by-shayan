import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Contact = () => {
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
          <h1 className="text-4xl md:text-6xl font-semibold">Contact Us</h1>
          <br />
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList className="flex justify-center space-x-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          For more information about our products and services, please feel free to drop us an email.
          Our staff is always there to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, <br /> United States
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Working Time</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Subject"
                  aria-label="Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                  placeholder="Your Message"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
