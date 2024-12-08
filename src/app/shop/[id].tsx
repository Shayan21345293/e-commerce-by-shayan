import { useRouter } from 'next/router'
import Image from 'next/image'

const products = [
  { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', description: 'A comfortable modular sofa.', image: '/ch1.png' },
  { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', description: 'A beautiful dining table.', image: '/table.png' },
  { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', description: 'Perfect for outdoor parties.', image: '/ch3.png' },
  { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 115,000.00', description: 'Elegant console with a teak mirror.', image: '/ch4.png' },
]

const ProductPage = () => {
  const router = useRouter()
  const { id } = router.query

  // Find the product based on the id
  const product = products.find((product) => product.id === Number(id))

  if (!product) return <div>Product not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
      <Image src={product.image} alt={product.name} width={600} height={600} />
      <p className="text-gray-600 mt-4">{product.description}</p>
      <p className="text-xl font-semibold mt-4">{product.price}</p>
    </div>
  )
}

export default ProductPage
