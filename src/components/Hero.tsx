type Props = {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Hero({ title, subtitle, ctaLabel = 'Contact Us', ctaHref = '/contact' }: Props) {
  return (
    <section className="relative isolate">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-90"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517927065801-c8f8e63faab4?q=80&w=1600&auto=format&fit=crop)' }}
      />
      <div className="bg-white/70">
        <div className="container py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-extrabold text-forest">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-neutral-700">{subtitle}</p>}
          <div className="mt-8">
            <a href={ctaHref} className="btn btn-primary">{ctaLabel}</a>
          </div>
        </div>
      </div>
    </section>
  )
}