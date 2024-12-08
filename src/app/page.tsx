import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function hero () {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#FBEBB5] h-screen flex">
        {/* Left Side: Text Section */}
        <div className="flex-1 flex items-center p-8">
          <div className="text-left">
            <h1 className="text-7xl text-black font-semibold">
              Rocket SingleSeater
            </h1>
            <br />
            <Link href={'/shop'} className="text-4xl text-black underline">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="relative w-3/4 h-full">
          <Image
            className="object-cover w-full h-full transform scale-x-[-1] translate-x-10 translate-y-16"
            src={'/s.png'}
            alt="a"
            layout="fill"
          />
        </div>
      </div>

      {/* Top Pick For You Section */}
      <div className="bg-white h-screen flex flex-col items-center pt-16">
        <h1 className="text-4xl font-semibold text-black mb-4">Top Pick For You</h1>
        <p className="text-lg text-gray-500 mb-6">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
        <div className="flex justify-between items-center space-x-6 px-8 py-8">
          <div className="text-center">
            <Image src={'/ch1.png'} alt="ch1" width={300} height={200} className="object-contain" />
            <h1 className="text-black text-xl">Trenton modular sofa_3</h1>
            <p className="text-2xl text-black font-semibold mt-2">RS. 25000.00</p>
          </div>

          <div className="text-center">
            <Image src={'/ch2.png'} alt="ch2" width={300} height={200} className="object-contain" />
            <h1 className="text-black text-xl">Granite dining table with dining chair</h1>
            <p className="text-2xl text-black font-semibold mt-2">RS. 25000.00</p>
          </div>

          <div className="text-center">
            <Image src={'/ch3.png'} alt="ch3" width={200} height={200} className="object-contain" />
            <h1 className="text-black text-xl">Outdoor bar table and stool</h1>
            <p className="text-2xl text-black font-semibold mt-2">RS. 25000.00</p>
          </div>

          <div className="text-center">
            <Image src={'/ch4.png'} alt="ch4" width={300} height={200} className="object-contain" />
            <h1 className="text-black text-xl">Trenton modular sofa_3</h1>
            <p className="text-2xl text-black font-semibold mt-2">RS. 25000.00</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF9E5] h-screen flex items-center overflow-x-hidden">
  {/* Image Section (Left Side) */}
  <div className="flex-1">
    <Image 
      src={'/s1.png'} 
      alt="s1" 
      width={3000}  // Increase width for large size
      height={2000}   // Increase height for large size
      className="object-contain"
      layout="intrinsic"  // Ensures image scales properly
    />
  </div>

  {/* Text Section (Right Side) */}
  <div className="flex-1 text-center px-8">
    <h1 className="text-2xl text-black mb-4">New Arrivals</h1>
    <h1 className="text-5xl font-bold text-black mb-4">Asgaard Sofa</h1>
    <button className="border-2 border-black text-2xl text-black px-6 py-2">
      Order Now
    </button>
  </div>
</div>

      {/* Instagram Section */}
      <div className="relative bg-white h-screen flex justify-center pt-20">
  {/* Image with overlay */}
  <div className="relative w-full h-full">
    <Image
      src="/bg.jpeg" // Replace with your image source
      alt="Instagram Image"
      layout="fill"
      objectFit="cover"
      className="rounded-md" // Optional: add border-radius if needed
    />
    {/* Overlay with 50% opacity */}
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80"></div>
    {/* Content on top of image */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h1 className="text-7xl font-bold text-black mb-4">
        Our Instagram
      </h1>
      <p className="text-lg text-black mb-6">
        Follow our store on Instagram
      </p>
      <button className="bg-[#FAF4F4] text-black py-3 px-16 rounded-full shadow-lg hover:shadow-xl text-xl focus:outline-none hover:bg-[#E8E1E1] transition-all duration-300">
        Follow Us
      </button>
    </div>
  </div>
</div>

        </div>
      
  )
}
