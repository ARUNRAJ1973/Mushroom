import type { Product } from '../types'

export default function ProductCard({ name, description, imageUrl, price }: Product) {
  return (
    <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <img src={imageUrl} alt={name} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-base font-semibold text-neutral-900">{name}</h3>
        <p className="mt-2 text-sm text-neutral-700">{description}</p>
        {price && <p className="mt-3 text-sm font-medium text-moss">{price}</p>}
      </div>
    </div>
  )
}