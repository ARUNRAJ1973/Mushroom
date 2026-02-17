import { usePageMeta } from '../hooks/usePageMeta'
import g1 from '../../public/images/1.jpeg'
import g2 from '../../public/images/2.jpeg'
import g3 from '../../public/images/3.jpeg'
import g4 from '../../public/images/4.jpeg'
import g5 from '../../public/images/5.jpeg'
import g6 from '../../public/images/6.jpeg'

import r1 from '../../public/images/Recipies/gravy.jpeg'
import r2 from "../../public/images/Recipies/mushroom65.jpeg"
import r3 from '../../public/images/Recipies/biriyani.jpeg'
import r4 from '../../public/images/Recipies/grill.jpeg'
import r5 from '../../public/images/Recipies/fingerfrie.jpeg'
import r6 from '../../public/images/Recipies/satay.jpeg'

const images = [g1, g2, g3, g4, g5, g6]
const recipes = [r1,r2,r3,r4,r5,r6]

export default function Gallery() {
  usePageMeta('Gallery — AR Organic Mushroom', 'Photos from our organic oyster mushroom farm and harvests.')
  return (
    <>
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">Gallery</h1>
      <p className="mt-3 text-neutral-700">A glimpse into our farm and oyster harvests.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="h-48 w-full rounded-lg object-cover shadow" />
        ))}
      </div>
    </section>
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-forest">Recipes</h1>
      <p className="mt-3 text-neutral-700">Delicious recipes using our organic mushrooms.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} className="h-64 w-full rounded-lg object-cover shadow" />
        ))}
      </div>
    </section>
    </>
  )
}