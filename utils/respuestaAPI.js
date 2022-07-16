import client from './axiosClient'

export const obtenerEncuestaPregunta = async(id) => {
  try {
    const { data } = await client.get(`/api/responder/${id}`)

    return data
  } catch (error) {
    console.log(error);
  }
}

export const enviarRespuesta = async(pregunta) => {

  const enviar = []

  for (const item in pregunta) {
    enviar.push({preguntaId: parseInt(item), valor: pregunta[item]})
  }
  console.log(enviar);
  try {
    const { data } = await client.post(`/api/resultados/`, {pregunta: enviar})

    return data
  } catch (error) {
    console.log(error);
  }
}


export const obtenerTodoResultado = async(id) => {

  try {
    const { data: {data} } = await client.get(`/api/resultados/${id}`)
    console.log(data);

    const resultado = data.map(item => {
      return { valor: item.valor, count: item._count._all}
    })
    console.log(resultado);
    return resultado
  } catch (error) {
    console.log(error);
  }
}