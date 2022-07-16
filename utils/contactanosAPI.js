import client from './axiosClient'

export const crearContacto = async(formulario) => {
  const { email, mensaje } = formulario
  try {
    const {data} = await client.post('/api/contactanos/', {
      email,
      mensaje
    })
    return data
  } catch (error) {
    console.log(error.response);
    //return {data: error.response.data }
  }
}
