import client from './axiosClient'

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

export const todasLasEncuesta = async() => {
  try {
    const { data } = await client.get('/api/encuesta')
    return data

  } catch (error) {
    console.log(error);
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

export const eliminarUnaEncuesta = async(id) => {
  try {
    const { data } = await client.delete(`/api/encuesta/${id}`)
    return data
  } catch (error) {
    console.log(error);
  }
}

export const publicarUnaEncuesta = async(id) => {
  try {
    const { data } = await client.put('/api/encuesta/publicar', {
      id,
      estado: true
    })

    return data
  } catch (error) {
    console.log(error);
  }
}