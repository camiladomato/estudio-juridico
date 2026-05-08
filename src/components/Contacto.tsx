import { useState, type FormEvent } from 'react'
import { WA_URL, buildWAUrl } from '../config'

export function Contacto() {
  const [form, setForm] = useState({ nombre: '', telefono: '', mensaje: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.nombre.trim() || !form.mensaje.trim()) return
    window.open(buildWAUrl(form.nombre, form.telefono, form.mensaje), '_blank')
    setForm({ nombre: '', telefono: '', mensaje: '' })
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">
            ¿Necesitás asesoramiento legal?
          </h2>
          <div className="w-16 h-1 bg-[#c5a059] mx-auto mb-5" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Completá el formulario y te contactamos por WhatsApp, o escribinos directamente.
            Respondemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info de contacto */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <InfoCard
              icon={<PhoneIcon />}
              titulo="WhatsApp"
              texto="Consultá directo y sin esperas"
              link={WA_URL}
              linkText="Enviar mensaje"
            />
            <InfoCard
              icon={<MailIcon />}
              titulo="Email"
              texto="[email@estudiojuridico.com.ar]"
            />
            <InfoCard
              icon={<MapIcon />}
              titulo="Dirección"
              texto="[Dirección del estudio — a completar]"
            />
            <InfoCard
              icon={<ClockIcon />}
              titulo="Horario de atención"
              texto="Lunes a viernes: 9:00 – 18:00 hs"
            />
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-semibold text-lg mb-6">
              Envianos tu consulta
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">
                    Nombre <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#c5a059]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    placeholder="Tu teléfono (opcional)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#c5a059]/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">
                  Consulta <span className="text-[#c5a059]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Describí brevemente tu situación legal..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#c5a059]/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb85a] text-white font-semibold py-4 rounded-xl transition-colors text-base"
              >
                <WhatsAppIcon />
                Enviar consulta por WhatsApp
              </button>
              <p className="text-slate-500 text-xs text-center">
                Al enviar, se abrirá WhatsApp con tu mensaje preparado.
              </p>
            </form>
          </div>
        </div>

        {/* Mapa embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 h-64 lg:h-80">
          <iframe
            title="Ubicación del estudio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208698.50637716577!2d-58.70807!3d-34.61315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812862ba4df2!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1620000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  titulo,
  texto,
  link,
  linkText,
}: {
  icon: React.ReactNode
  titulo: string
  texto: string
  link?: string
  linkText?: string
}) {
  return (
    <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
      <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
        {icon}
      </div>
      <div>
        <p className="text-white font-medium text-sm">{titulo}</p>
        <p className="text-slate-400 text-sm mt-0.5">{texto}</p>
        {link && linkText && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a059] text-sm font-medium hover:underline mt-1 inline-block"
          >
            {linkText} →
          </a>
        )}
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
