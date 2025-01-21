'use client'
import { allproduct } from '@/sanity/lib/quries';
import { Products } from '../../../types/products';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = createImageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

interface ShopProps {
  products: Products[];
}

const Shop = async () => {
  // Fetch the products data directly inside the component using async
  const products: Products[] = await client.fetch(allproduct);

  const handleAddToCart = (product: Products) => {
    // Add to cart logic (client-side)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Shop Our Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {product.image?.asset?._ref ? (
              <Image
                src={urlFor(product.image.asset).url() || '/fallback.png'}
                alt={product.title}
                width={300}
                height={300}
                className="object-cover w-full h-64 rounded-t-lg"
              />
            ) : (
              <div className="h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
                <span className="text-gray-600">No Image Available</span>
              </div>
            )}
            <h2 className="text-xl font-bold mt-4 text-center">{product.title}</h2>
            <p className="text-gray-500 text-center">{product.price ? `Price: Rs. ${product.price}` : 'Price Not Available'}</p>

            {/* Truncated Description */}
            <p className="text-gray-600 mt-2 line-clamp-2">
              {product.description}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        {/* Cart display logic here */}
      </div>
    </div>
  );
};

export default Shop;
