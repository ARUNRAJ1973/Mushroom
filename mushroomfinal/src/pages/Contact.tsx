import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta('Contact Us — AR Organic Mushroom', 'Reach us by phone or email. Oyster benefits and cooking tips included.')
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">Contact AR Organic Mushroom</h1>
      <p className="mt-3 text-neutral-700">We are an oyster-only organic mushroom farm. Reach us using the details below.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="space-y-3 rounded border border-neutral-200 p-4">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <p><span className="font-medium">Phone:</span> 9360523173</p>
          <p><span className="font-medium">Email:</span> arunarunachalam2606@gmail.com</p>
          <p>
            <span className="font-medium">Address:</span> No 53, School Street, Keelalinjipattu, Reddichavady, Cuddalore 607403
          </p>
        </div>

        <div className="space-y-3 rounded border border-neutral-200 p-4">
          <h2 className="text-xl font-semibold">Benefits of Oyster Mushroom</h2>
          <ul className="list-disc pl-5 text-neutral-800">
            <li>Rich in protein, fiber, and B vitamins.</li>
            <li>Contains antioxidants that support immunity.</li>
            <li>Low in calories and supports heart health.</li>
          </ul>
          <h3 className="text-lg font-semibold">Simple Cooking Tips</h3>
          <ul className="list-disc pl-5 text-neutral-800">
            <li>Rinse lightly and pat dry; avoid soaking.</li>
            <li>Stir-fry with garlic, chili, and a splash of soy.</li>
            <li>Great in soups, noodles, biriyani, or crispy tempura.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded bg-neutral-100 p-4 text-sm text-neutral-700">
        Prefer WhatsApp or a call? Use the phone number above. We typically respond within 24 hours.
      </div>
    </section>
  )
}