import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Especialidades } from './components/Especialidades'
import { Nosotros } from './components/Nosotros'
import { Contacto } from './components/Contacto'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Especialidades />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
