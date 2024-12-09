import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#FBEBB5] h-screen flex flex-col md:flex-row">
        {/* Left Side: Text Section */}
        <div className="flex-1 flex items-center p-8 text-center md:text-left">
          <div>
            <h1 className="text-5xl md:text-7xl text-black font-semibold leading-tight">
              Rocket SingleSeater
            </h1>
            <br />
            <Link href={"/shop"} className="text-3xl md:text-4xl text-black underline">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="relative w-full md:w-3/4 h-1/2 md:h-full">
          <Image
            className="object-contain w-full h-full transform scale-x-[-1]"
            src={"/s.png"}
            alt="Hero Image"
            layout="fill"
            priority
          />
        </div>
      </div>

      {/* Top Pick For You Section */}
      <div className="bg-white py-16 px-4">
        <h1 className="text-4xl font-semibold text-black text-center mb-4">
          Top Pick For You
        </h1>
        <p className="text-lg text-gray-500 text-center mb-6">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { img: "/ch1.png", title: "Trenton modular sofa_3", price: "RS. 25000.00" },
            { img: "/ch2.png", title: "Granite dining table with dining chair", price: "RS. 25000.00" },
            { img: "/ch3.png", title: "Outdoor bar table and stool", price: "RS. 25000.00" },
            { img: "/ch4.png", title: "Trenton modular sofa_3", price: "RS. 25000.00" },
          ].map((item, index) => (
            <div key={index} className="text-center w-[300px]">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="object-contain"
              />
              <h1 className="text-black text-xl">{item.title}</h1>
              <p className="text-2xl text-black font-semibold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#FFF9E5] py-16 flex flex-col md:flex-row items-center overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 mb-8 md:mb-0">
          <Image
            src={"/s1.png"}
            alt="Featured Product"
            width={1500}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center px-4">
          <h1 className="text-2xl text-black mb-4">New Arrivals</h1>
          <h1 className="text-5xl font-bold text-black mb-4">Asgaard Sofa</h1>
          <button className="border-2 border-black text-2xl text-black px-6 py-2">
            Order Now
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="relative bg-white py-20">
        <div className="relative w-full h-96">
          <Image
            src="/bg.jpeg"
            alt="Instagram Background"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-80"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
              Our Instagram
            </h1>
            <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
            <button className="bg-[#FAF4F4] text-black py-3 px-16 rounded-full shadow-lg hover:shadow-xl text-xl focus:outline-none hover:bg-[#E8E1E1] transition-all duration-300">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
