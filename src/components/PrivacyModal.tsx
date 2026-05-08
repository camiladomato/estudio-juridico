import { useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h2 className="text-[#0f172a] font-bold text-xl">Política de Privacidad</h2>
            <p className="text-slate-400 text-xs mt-0.5">
              Ley 25.326 — Protección de Datos Personales
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="px-8 py-6 flex flex-col gap-5 text-slate-600 text-sm leading-relaxed">
          <p>
            En cumplimiento de la <strong className="text-[#0f172a]">Ley N° 25.326 de Protección de Datos Personales</strong> de
            la República Argentina y su Decreto Reglamentario N° 1558/2001, le informamos lo siguiente:
          </p>

          <div>
            <h3 className="text-[#0f172a] font-semibold mb-2">1. Datos que recopilamos</h3>
            <p>
              A través del formulario de contacto de este sitio web, podemos recibir datos
              personales tales como nombre y número de teléfono. Estos datos son proporcionados
              de forma voluntaria por el usuario.
            </p>
          </div>

          <div>
            <h3 className="text-[#0f172a] font-semibold mb-2">2. Finalidad del tratamiento</h3>
            <p>
              Los datos recibidos serán utilizados <strong>exclusivamente</strong> para
              responder a la consulta efectuada. No serán utilizados con fines comerciales,
              publicitarios ni compartidos con terceros bajo ninguna circunstancia.
            </p>
          </div>

          <div>
            <h3 className="text-[#0f172a] font-semibold mb-2">3. Almacenamiento</h3>
            <p>
              El formulario de contacto de este sitio deriva directamente a WhatsApp y
              no almacena datos en servidores propios. Los mensajes quedan en la conversación
              de WhatsApp del estudio.
            </p>
          </div>

          <div>
            <h3 className="text-[#0f172a] font-semibold mb-2">4. Derechos del titular</h3>
            <p>
              El titular de los datos tiene derecho a acceder, rectificar, actualizar y
              suprimir sus datos personales en cualquier momento. Para ejercer estos derechos,
              puede contactarnos a través de los medios indicados en este sitio.
            </p>
          </div>

          <div>
            <h3 className="text-[#0f172a] font-semibold mb-2">5. Autoridad de control</h3>
            <p>
              La <strong className="text-[#0f172a]">Agencia de Acceso a la Información Pública</strong>,
              en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución
              de atender las denuncias y reclamos que interpongan quienes resulten afectados
              en sus derechos por incumplimiento de las normas vigentes en materia de
              protección de datos personales.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-slate-500">
            Responsable del tratamiento: <strong>[Nombre completo del/los titular/es del estudio]</strong> —
            [Dirección del estudio].
          </div>
        </div>
      </div>
    </div>
  )
}
