import Link from 'next/link'
import React from 'react'
export default function Foot() {
  return (
    <div>
    <footer className="bg-white py-10">
  <div className="max-w-7xl mx-auto px-6">
    {/* First Row: Address */}
    <div className="text-center sm:text-left mb-8">
      <h2 className="text-xl font-bold text-gray-800">Our Address</h2>
      <p>1234 Street Name</p>
      <p>City, State, 12345</p>
      <p>Country</p>
    </div>

    {/* Second Row: Quick Links */}
    <div className="text-center sm:text-left mb-8">
      <h2 className="text-xl font-bold text-gray-800">Quick Links</h2>
      <ul className="space-y-2">
        <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
        <li><Link href="/about" className="text-gray-600 hover:text-black">About</Link></li>
        <li><Link href="/services" className="text-gray-600 hover:text-black">Services</Link></li>
        <li><Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link></li>
      </ul>
    </div>

    {/* Third Row: Other Links */}
    <div className="text-center sm:text-left mb-8">
      <h2 className="text-xl font-bold text-gray-800">Other Links</h2>
      <ul className="space-y-2">
        <li><Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link></li>
        <li><Link href="/terms" className="text-gray-600 hover:text-black">Terms of Service</Link></li>
        <li><Link href="/faq" className="text-gray-600 hover:text-black">FAQ</Link></li>
      </ul>
    </div>

    {/* Fourth Row: Newsletter Subscription */}
    <div className="text-center sm:text-left">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
      <p className="text-lg mb-4">Stay updated with the latest news and offers</p>
      <form className="flex justify-center sm:justify-start items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 px-4 py-2 rounded-l-md text-gray-700"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
</footer>

    </div>
  )
}
