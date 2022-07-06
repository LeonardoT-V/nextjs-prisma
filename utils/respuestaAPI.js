import client from './axiosClient'

export const obtenerEncuestaPregunta = async(id) => {
  try {
    const { data } = await client.get(`/api/responder/${id}`)

    return data
  } catch (error) {
    console.log(error);
  }
}