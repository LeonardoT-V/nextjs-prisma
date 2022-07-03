import client from './axiosClient'

export const mostrarPreguntas = async(encuestaId) => {

  try {
    const {data} = await client.get(`/api/pregunta/${encuestaId}`)
    return data
  } catch (error) {
    //console.log(error.response);
    return {data: error.response.data }
  }
}