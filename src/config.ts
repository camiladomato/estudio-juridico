export const WA_NUMBER = '5491161422349'
export const WA_BASE = 'Hola! Me gustaría hacer una consulta legal.'
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_BASE)}`

export function buildWAUrl(nombre: string, telefono: string, mensaje: string) {
  const text = `Hola, soy ${nombre}${telefono ? ` (${telefono})` : ''}. ${mensaje}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
