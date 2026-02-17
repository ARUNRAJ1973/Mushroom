import Hero from '../components/Hero'
import { usePageMeta } from '../hooks/usePageMeta'
import ProductCard from '../components/ProductCard'
import type { Product } from '../types'
import img1 from '../../public/images/1.jpeg'
import img3 from '../../public/images/3.jpeg'
import img4 from '../../public/images/4.jpeg'
import img5 from '../../public/images/5.jpeg'
import img6 from '../../public/images/6.jpeg'
import img7 from '../../public/images/7.jpg'
import bannerimg from '../../public/images/banner.jpg'

const products: Product[] = [
  {
    id: 'oyster',
    name: 'Oyster Mushrooms',
    description: 'Delicate texture and mild flavor; great for sautés.',
    price: '₹250 / kg',
    imageUrl: img1,
  },
]

export default function Home() {
  usePageMeta('AR Organic Mushroom — Organic Oyster Mushrooms', 'Organic, sustainable farm specializing in fresh oyster mushrooms.')
  return (
    <div>
      {/* Top responsive banner image */}
      <section className="w-full">
        <div className="relative">
          <img
            src={bannerimg}
            alt="Oyster mushrooms"
            className="h-48 sm:h-64 md:h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      <Hero
        title="Organic Oyster Mushrooms, Farmed Sustainably"
        subtitle="We grow premium oyster mushrooms using eco-friendly practices, delivering freshness from farm to table."
        ctaLabel="Order Now"
        ctaHref="/contact"
      />

      {/* Intro section */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold text-forest">Welcome to AR Organic Mushroom</h2>
            <p className="mt-3 text-neutral-700">
              Our family-run farm specializes in cultivating organic oyster mushrooms with a focus on sustainability, quality, and taste. Every harvest is grown with care and delivered fresh.
            </p>
          </div>
          <img
            className="rounded-lg shadow h-64 w-full "
            src={img7}
            alt="Mushroom farm"
          />
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-forest">Featured Product</h2>
          <a href="/products" className="text-sm font-medium text-moss hover:text-forest transition">View all</a>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* Benefits section */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold text-forest">Benefits of Organic Oyster Mushrooms</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            'High in vitamins and antioxidants',
            'Supports immune health',
            'Low-calorie and nutrient-dense',
            'Versatile culinary uses',
            'Sustainably grown with minimal waste',
            'No harmful chemicals',
          ].map((b) => (
            <li key={b} className="rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm">
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Home image highlights */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold text-forest">Farm Highlights</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[img3, img4, img5, img6].map((src, idx) => (
            <img key={idx} src={src} alt={`Farm highlight ${idx + 1}`} className="h-64 w-full rounded-lg object-cover shadow" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12 text-center">
        <h3 className="text-xl font-semibold text-neutral-900">Ready to enjoy fresh organic oyster mushrooms?</h3>
        <div className="mt-4 flex justify-center gap-4">
          <a href="/contact" className="btn btn-primary">Contact Us</a>
          <a href="/products" className="btn btn-outline">Browse Products</a>
        </div>
      </section>
    </div>
  )
}