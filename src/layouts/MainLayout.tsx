import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}