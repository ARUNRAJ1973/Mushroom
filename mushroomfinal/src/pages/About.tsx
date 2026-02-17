import { usePageMeta } from '../hooks/usePageMeta'
import teamImg from '../../public/images/3.jpeg'
import greenhouseImg from '../../public/images/6.jpeg'

export default function About() {
  usePageMeta('About Us — AR Organic Mushroom', 'Learn about our mission to cultivate sustainable, organic oyster mushrooms.')
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">About Us</h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        AR Organic Mushroom began with a passion for sustainable agriculture and real food. Our mission is to cultivate premium organic oyster mushrooms while maintaining a minimal environmental footprint. We combine modern techniques with eco-friendly practices to produce flavorful, nutrient-rich mushrooms for homes and restaurants alike.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <img className="rounded-lg shadow h-1/2 w-full" src={teamImg} alt="Farm team" />
        <img className="rounded-lg shadow h-1/2 w-full" src={greenhouseImg} alt="Greenhouse" />
      </div>
    </section>
  )
}