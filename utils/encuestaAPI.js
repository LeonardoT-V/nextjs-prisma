import client from './axiosClient'
import { usuarioIdLocal } from './localStorage';

export const crearEncuesta = async(formulario) => {
  const { titulo, usuario, descripcion, auth } = formulario
  console.log(formulario);
  try {
    const {data} = await client.post('/api/encuesta/crear', {
      titulo,
      usuario,
      descripcion,
      auth
    })
    return data
  } catch (error) {
    console.log(error.response);
    //return {data: error.response.data }
  }
}

export const mostrarMisEncuesta = async(usuario) => {
  try {
    const {data} = await client.get(`/api/encuesta/${usuario}`)
    return data
  } catch (error) {
    console.log(error);
    return {data: error.response.data }
  }

}
