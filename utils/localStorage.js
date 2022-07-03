

const existeUsuarioGuardado = () => {
  if(typeof window === 'undefined') return false
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  return usuario
}

const cerrarSesionLocal = () => {
  if(typeof window === 'undefined') return false
  localStorage.removeItem('usuario')
}

const insertarUsuarioLocal = (data) => {
  if(typeof window === 'undefined') return false
  localStorage.setItem('usuario', JSON.stringify(data))
}

const usuarioIdLocal = () => {
  if(typeof window === 'undefined') return false
  const usuario = JSON.parse(localStorage.getItem('usuario'))
  return usuario.id
}




export {
  existeUsuarioGuardado,
  cerrarSesionLocal,
  insertarUsuarioLocal,
  usuarioIdLocal,
}