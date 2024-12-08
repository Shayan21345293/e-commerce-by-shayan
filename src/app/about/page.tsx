import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
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
          <h1 className="text-6xl font-semibold">About Us</h1>
          <br />
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/about">About</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Story</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          We are passionate about creating unique and innovative designs that bring joy and functionality to your life.
          Our mission is to craft high-quality handmade products that are not only aesthetically pleasing but also
          sustainable and practical.
        </p>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600">
            Our mission is to deliver exceptional products crafted with care and attention to detail, ensuring every
            customer is satisfied with the results. We believe in the power of creativity and the impact it has on the
            world.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/team1.jpg" // Replace with actual image path
                  alt="Team Member 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold">Shayan Ali</h4>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/team2.jpg" // Replace with actual image path
                  alt="Team Member 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-600">Lead Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/team3.jpg" // Replace with actual image path
                  alt="Team Member 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold">Alex Brown</h4>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc text-lg text-gray-600 space-y-4">
            <li>Integrity: We prioritize honesty and transparency in everything we do.</li>
            <li>Innovation: We embrace creativity and strive for continuous improvement.</li>
            <li>Sustainability: We are committed to eco-friendly practices and materials.</li>
            <li>Customer Satisfaction: We ensure every customer has a seamless and positive experience.</li>
          </ul>
        </div>
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

export default About;
