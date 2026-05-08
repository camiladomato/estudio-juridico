type IconProps = { className?: string }

const areas = [
  {
    title: 'Civil y Comercial',
    description:
      'Contratos, responsabilidad civil, cobros judiciales y daños y perjuicios. Defensa integral de sus derechos patrimoniales.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16M3 20h18M4 8h16" />
        <circle cx="7.5" cy="12.5" r="2.5" strokeWidth={1.5} />
        <circle cx="16.5" cy="12.5" r="2.5" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: 'Derecho Laboral',
    description:
      'Despidos, liquidaciones, accidentes de trabajo y conflictos laborales. Asesoramiento a empleados y empleadores.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zm0 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h8z" />
      </svg>
    ),
  },
  {
    title: 'Derecho de Familia',
    description:
      'Divorcios, alimentos, tenencia y régimen de visitas. Acompañamiento humano y jurídico en cada etapa del proceso.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Derecho Penal',
    description:
      'Defensa penal, querella y representación en causas penales. Compromiso absoluto con la justicia en cada proceso.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Sucesiones',
    description:
      'Trámites sucesorios, testamentos, hijuelas y partición de herencias. Gestión ágil y transparente para su familia.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Derecho Inmobiliario',
    description:
      'Compraventa, alquileres, usucapión y conflictos de propiedad. Seguridad jurídica en cada operación inmobiliaria.',
    Icon: ({ className }: IconProps) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21" />
      </svg>
    ),
  },
]

export function Especialidades() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
            Áreas de práctica
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mt-3 mb-4">
            Nuestras especialidades
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Brindamos asesoramiento integral en las principales ramas del derecho,
            con un enfoque personalizado y comprometido.
          </p>
        </div>

        {/* Grilla de áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group p-7 border border-slate-100 rounded-2xl hover:border-[#c5a059]/40 hover:shadow-lg hover:shadow-[#c5a059]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 flex items-center justify-center mb-5 group-hover:bg-[#c5a059]/20 transition-colors">
                <Icon className="w-6 h-6 text-[#c5a059]" />
              </div>
              <h3 className="text-[#0f172a] font-semibold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
