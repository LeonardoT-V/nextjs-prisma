

const existeUsuarioGuardado = () => {
  if(typeof window === 'undefined') return false
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  return usuario
}

const cerrarSesionLocal = () => {
  if(typeof window === 'undefined') return false
  localStorage.removeItem('usuario')
}

export {
  existeUsuarioGuardado,
  cerrarSesionLocal
}