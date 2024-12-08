'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Product = {
  id: number
  name: string
  price: string
  category: string
  image: string
}

const products: Product[] = [
  { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', category: 'Sofa', image: '/ch1.png' },
  { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', category: 'Table', image: '/table.png' },
  { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', category: 'Sofa', image: '/ch3.png' },
  { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 115,000.00', category: 'Chair', image: '/ch4.png' },
  { id: 5, name: 'Grain coffee table', price: 'Rs. 225,000.00', category: 'Table', image: '/ch5.png' },
  { id: 6, name: 'Kent coffee table', price: 'Rs. 25,000.00', category: 'Sofa', image: '/ch6.png' },
  { id: 7, name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', category: 'Chair', image: '/ch7.png' },
  { id: 8, name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', category: 'Table', image: '/ch8.png' },
  { id: 9, name: 'Plain console_', price: 'Rs. 258,200.00', category: 'Table', image: '/ch9.png' },
  { id: 10, name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', category: 'Table', image: '/ch10.png' },
  { id: 11, name: 'SJP_0825', price: 'Rs. 200,000.00', category: 'Table', image: '/ch11.png' },
  { id: 12, name: 'Bella chair and table', price: 'Rs. 100,000.00', category: 'Table', image: '/ch12.png' },
  { id: 13, name: 'Granite square side table', price: 'Rs. 258,800.00', category: 'Table', image: '/ch13.png' },
  { id: 14, name: 'Asgaard sofa', price: 'Rs. 250,000.00', category: 'Table', image: '/ch14.png' },
  { id: 15, name: 'Maya sofa three seater', price: 'Rs. 115,000.00', category: 'Table', image: '/ch15.png' },
  { id: 16, name: 'Outdoor sofa set', price: 'Rs. 244,000.00', category: 'Table', image: '/ch16.png' },
]

const Shop = () => {
  const [filter, setFilter] = useState('All')

  // Filter the products based on the selected category
  const filteredProducts =
    filter === 'All' ? products : products.filter((product) => product.category === filter)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8">Shop</h1>

      {/* Filter Section */}
      <div className="bg-gray-200 py-4 mb-8">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${filter === 'Chair' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setFilter('Chair')}
          >
            Chairs
          </button>
          <button
            className={`px-4 py-2 ${filter === 'Table' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setFilter('Table')}
          >
            Tables
          </button>
          <button
            className={`px-4 py-2 ${filter === 'Sofa' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setFilter('Sofa')}
          >
            Sofas
          </button>
        </div>
      </div>

      {/* Product List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="text-center border p-4">
            <Link href={`/shop/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-72"
              />
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
