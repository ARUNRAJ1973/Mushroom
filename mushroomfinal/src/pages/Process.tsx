import { usePageMeta } from '../hooks/usePageMeta'

export default function Process() {
  usePageMeta('Farming Process — AR Organic Mushroom', 'See how we grow oyster mushrooms sustainably, from inoculation to harvest.')
  const steps = [
    { title: 'Preparation', text: 'We source certified organic substrates and prepare sterile grow environments.' },
    { title: 'Inoculation', text: 'Premium spawn is introduced to substrates under strict cleanliness.' },
    { title: 'Incubation', text: 'Temperature and humidity are optimized for colonization and growth.' },
    { title: 'Fruiting', text: 'Careful light and airflow management encourages fruit body formation.' },
    { title: 'Harvest', text: 'Hand-picked at peak freshness, packed the same day.' },
  ]

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">Farming Process</h1>
      <p className="mt-3 max-w-3xl text-neutral-700">
        Our process prioritizes sustainability and quality at every step to produce consistent, flavorful mushrooms without harmful chemicals.
      </p>
      <ol className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="text-moss text-sm font-semibold">Step {i + 1}</div>
            <h3 className="mt-1 text-lg font-semibold text-neutral-900">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}