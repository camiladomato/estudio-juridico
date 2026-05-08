import { useState, useEffect } from 'react'
import { WA_URL } from '../config'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a] shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#c5a059] rounded flex items-center justify-center text-[#0f172a] font-bold text-sm select-none">
              EJ
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Estudio <span className="text-[#c5a059]">Jurídico</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-[#c5a059] transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#c5a059] text-[#0f172a] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#d4ae6e] transition-colors"
            >
              Consultar ahora
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              aria-label="Abrir menú"
            >
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-200 ${
                  open ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#0f172a] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-[#c5a059] transition-colors py-3 text-sm font-medium border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-[#c5a059] text-[#0f172a] font-semibold text-sm px-5 py-3 rounded-lg"
          >
            Consultar ahora
          </a>
        </div>
      </div>
    </header>
  )
}
