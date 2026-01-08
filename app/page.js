import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 noise-overlay">
      {/* Placeholder Banner */}
      <div className="bg-amber-500 text-dark-900 text-center py-2 px-4 text-sm font-medium">
        Acest site este un placeholder - în curs de dezvoltare
      </div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
