import { useState } from 'react'
import { WA_URL } from '../config'
import { PrivacyModal } from './PrivacyModal'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

// Reemplazar con el link de Data Fiscal de AFIP del cliente
// Formato: http://qr.afip.gob.ar/?qr=CODIGO_DEL_CLIENTE
const AFIP_DATA_FISCAL_URL = '#'

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
      <footer className="bg-[#070f1e] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          {/* Fila principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Logo y tagline */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-[#c5a059] rounded flex items-center justify-center text-[#0f172a] font-bold text-sm">
                  EJ
                </div>
                <span className="text-white font-semibold text-lg">
                  Estudio <span className="text-[#c5a059]">Jurídico</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-4">
                Defendemos tus derechos con experiencia, compromiso y atención personalizada.
              </p>
              {/* Matrícula */}
              <p className="text-slate-600 text-xs">
                Mat. Prof. N° <span className="text-slate-500">[XXXX]</span> — C.P.A.C.F.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-white font-medium text-sm mb-4">Navegación</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-slate-500 hover:text-[#c5a059] transition-colors text-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-white font-medium text-sm mb-4">Contacto</p>
              <div className="flex flex-col gap-2.5 text-sm text-slate-500">
                <span>[Dirección — a completar]</span>
                <span>[email@estudiojuridico.com.ar]</span>
                <span>Lunes a viernes · 9:00 – 18:00 hs</span>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#25D366]/20 transition-colors"
              >
                <WAIcon />
                Escribinos por WhatsApp
              </a>
            </div>
          </div>

          {/* Data Fiscal AFIP */}
          <div className="border-t border-white/5 pt-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <a
              href={AFIP_DATA_FISCAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Datos Fiscales"
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-colors">
                {/* Logo AFIP simplificado */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-4 h-4 bg-[#0066b3] rounded-sm flex items-center justify-center">
                      <span className="text-white text-[7px] font-bold leading-none">A</span>
                    </div>
                    <span className="text-white text-xs font-bold tracking-wider">AFIP</span>
                  </div>
                  <span className="text-[10px] text-slate-400 leading-tight">Data Fiscal</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-left">
                  <p className="text-slate-300 text-xs font-medium">Responsable Inscripto</p>
                  <p className="text-slate-500 text-[10px]">Verificar en AFIP →</p>
                </div>
              </div>
              <span className="text-slate-600 text-xs hidden sm:block">
                (reemplazar con QR real del cliente)
              </span>
            </a>

            {/* Disclaimer */}
            <p className="text-slate-600 text-xs max-w-md leading-relaxed">
              La información de este sitio tiene fines informativos y no constituye asesoramiento
              legal. El contacto no establece una relación abogado-cliente.
            </p>
          </div>

          {/* Barra inferior */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <span>© {new Date().getFullYear()} Estudio Jurídico. Todos los derechos reservados.</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-[#c5a059] transition-colors"
              >
                Política de Privacidad
              </button>
              <span>·</span>
              <span>
                Desarrollado por <span className="text-[#c5a059]">Camila Domato</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  )
}

function WAIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
