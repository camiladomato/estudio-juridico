import { WA_URL } from '../config'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden"
    >
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#c5a059 1px, transparent 1px), linear-gradient(to right, #c5a059 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Resplandor lateral */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Línea dorada izquierda */}
      <div className="absolute left-0 top-20 h-[60%] w-0.5 bg-gradient-to-b from-[#c5a059] via-[#c5a059]/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#c5a059]/40 bg-[#c5a059]/10 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
            <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
              Estudio Jurídico de Confianza
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Defendemos tus{' '}
            <span className="text-[#c5a059]">derechos</span>
            {' '}con experiencia y compromiso.
          </h1>

          {/* Subtítulo */}
          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
            Asesoramiento jurídico especializado en derecho civil, laboral, familiar y
            comercial. Soluciones legales claras para cada situación.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb85a] text-white font-semibold px-7 py-4 rounded-xl transition-colors text-base"
            >
              <WhatsAppIcon />
              Consultar por WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#c5a059]/60 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0f172a] hover:border-[#c5a059] font-semibold px-7 py-4 rounded-xl transition-all text-base"
            >
              Ver nuestros servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { num: '+10', label: 'Años de experiencia' },
              { num: '+500', label: 'Casos resueltos' },
              { num: '100%', label: 'Compromiso con el cliente' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#c5a059]">{s.num}</p>
                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
