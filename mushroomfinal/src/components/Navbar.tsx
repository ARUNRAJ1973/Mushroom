import { NavLink as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import type { NavLink as LinkType } from '../types'

const links: LinkType[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Mushrooms', path: '/products' },
  { label: 'Farming Process', path: '/process' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="container flex items-center justify-between py-3">
        <RouterLink to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-moss text-white font-bold">AR</span>
          <span className="text-lg font-semibold">AR Organic Mushroom</span>
        </RouterLink>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <RouterLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-forest ${
                  isActive ? 'text-moss' : 'text-neutral-700'
                }`
              }
            >
              {l.label}
            </RouterLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
          >
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`${open ? 'block' : 'hidden'} fixed inset-0 bg-black/40 touch-pan-y`} 
        onClick={() => setOpen(false)}
      />

      {/* Right-side drawer */}
      <aside
        className={`fixed right-0 top-0 h-screen w-72 bg-white shadow-xl transform transition-transform duration-300 touch-pan-y ${open ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 p-4">
          <RouterLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-moss text-white font-bold">AR</span>
            <span className="text-base font-semibold">AR Organic Mushroom</span>
          </RouterLink>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded p-2 text-neutral-600 hover:bg-neutral-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {links.map((l) => (
            <RouterLink
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 ${
                  isActive ? 'text-moss' : 'text-neutral-800'
                }`
              }
            >
              {l.label}
            </RouterLink>
          ))}
        </nav>
      </aside>
    </header>
  )
}