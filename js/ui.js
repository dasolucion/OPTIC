// Utilidades compartidas por las páginas públicas.

export function escapeHtml (value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[c])
}

export function formatoBs (monto) {
  return 'Bs. ' + Number(monto || 0).toLocaleString('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function formatoMoneda (monto, moneda) {
  return (moneda === 'USD' ? '$' : 'Bs. ') + Number(monto || 0).toLocaleString('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export function getToken () {
  return localStorage.getItem('optiline_token') || null
}

export function setSesion (token, cliente) {
  localStorage.setItem('optiline_token', token)
  localStorage.setItem('optiline_cliente', JSON.stringify(cliente || {}))
}

export function clearSesion () {
  localStorage.removeItem('optiline_token')
  localStorage.removeItem('optiline_cliente')
}

export function getClienteLocal () {
  try {
    return JSON.parse(localStorage.getItem('optiline_cliente') || 'null')
  } catch {
    return null
  }
}

export function mensajeError (err) {
  const msg = err?.message || err?.error_description || 'Ocurrió un error inesperado.'
  // Los errores de Postgres llegan como "mensaje" o con prefijo de código.
  return String(msg).replace(/^ERROR:\s*/i, '')
}
