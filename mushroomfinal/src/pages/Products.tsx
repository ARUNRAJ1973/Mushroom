import ProductCard from '../components/ProductCard'
import { usePageMeta } from '../hooks/usePageMeta'
import type { Product } from '../types'
import p1 from '../../public/images/4.jpeg'
import p2 from '../../public/images/5.jpeg'
import p3 from '../../public/images/6.jpeg'
import pcard from '../../public/images/3.jpeg'

const products: Product[] = [
  { id: 'oyster', name: 'Oyster Mushrooms', description: 'Delicate and mild.', price: '₹250 / kg', imageUrl: pcard },
]

export default function Products() {
  usePageMeta('Our Mushrooms — AR Organic Mushroom', 'We specialize in organic oyster mushrooms, harvested fresh.')
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">Our Mushrooms</h1>
      <p className="mt-3 text-neutral-700">Fresh, organic, and flavorful — we grow oyster mushrooms only.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* Pricing */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-forest">Pricing</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <img src={p1} alt="200 g pack" className="h-32 w-full object-cover" />
            <div className="p-4">
            <div className="text-sm text-neutral-600">200 g pack</div>
            <div className="mt-1 text-xl font-semibold text-neutral-900">₹50</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <img src={p2} alt="Per kilogram" className="h-32 w-full object-cover" />
            <div className="p-4">
            <div className="text-sm text-neutral-600">Per kilogram</div>
            <div className="mt-1 text-xl font-semibold text-neutral-900">₹250</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <img src={p3} alt="Mushroom kit available" className="h-32 w-full object-cover" />
            <div className="p-4">
            <div className="text-sm text-neutral-600">Mushroom kit available</div>
            <div className="mt-1 text-xl font-semibold text-neutral-900">₹500</div>
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-forest">Product Details</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Variety:</span> Florida (Pleurotus florida)</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Speciality:</span> High yielding, white color, multi-harvest</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Price:</span> ₹250 per kg</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Quality:</span> Farm Fresh, Pure white, high-quality</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Certification:</span> FSSAI certified</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Shelf Life:</span> 2 days in open condition; 4–5 days if refrigerated</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Packaging:</span> Breathable cover</li>
          <li className="rounded border border-neutral-200 bg-white p-3 text-sm text-neutral-800"><span className="font-medium">Storage:</span> Store in a cool place for optimal freshness</li>
        </ul>
      </div>
    </section>
  )
}