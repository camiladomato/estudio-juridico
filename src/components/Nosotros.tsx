const valores = [
  {
    titulo: 'Compromiso',
    texto: 'Cada caso es tratado con dedicación plena, como si fuera el único.',
  },
  {
    titulo: 'Transparencia',
    texto: 'Comunicación clara y honesta en cada etapa del proceso legal.',
  },
  {
    titulo: 'Experiencia',
    texto: 'Años de trayectoria resolviendo casos complejos con resultados concretos.',
  },
  {
    titulo: 'Cercanía',
    texto: 'Atención personalizada. Conocemos a cada cliente y su situación particular.',
  },
]

export function Nosotros() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
              Quiénes somos
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mt-3 mb-5">
              Un estudio jurídico comprometido con sus clientes
            </h2>
            <div className="w-16 h-1 bg-[#c5a059] mb-6" />
            <p className="text-slate-500 leading-relaxed mb-4">
              Somos un equipo de profesionales del derecho con amplia experiencia en el
              ámbito legal. Nuestra misión es brindar un servicio de excelencia,
              garantizando que cada cliente reciba el asesoramiento que merece,
              independientemente de la complejidad de su situación.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Nos especializamos en ofrecer soluciones jurídicas efectivas y accesibles,
              con un fuerte énfasis en la comunicación clara y el acompañamiento
              permanente durante todo el proceso.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#c5a059] pl-5 py-1">
              <p className="text-[#0f172a] font-medium italic text-lg leading-snug">
                "Cada cliente merece una defensa legal sólida y un asesoramiento claro,
                sin importar la complejidad del caso."
              </p>
            </blockquote>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valores.map(({ titulo, texto }) => (
              <div
                key={titulo}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#c5a059]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                </div>
                <h3 className="text-[#0f172a] font-semibold mb-2">{titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
