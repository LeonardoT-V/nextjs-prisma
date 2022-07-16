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


export const insertarPreguntas = async(pregunta,id) => {
  const opciones = []
  for (const item in pregunta) {
    if(item !== 'titulo') {
      if(pregunta[item] !== ''){
        opciones.push(pregunta[item])

      }
    }
  }
  const modelo = {
    titulo: pregunta.titulo,
    opcion: opciones,
    encuestaId: id
  }

  try {
    const {data} = await client.post(`/api/pregunta/`, modelo)
    return data
  } catch (error) {
    //console.log(error.response);
    return {data: error.response.data }
  }
}

export const elimiarPreguntas = async(id) => {

  try {
    const {data} = await client.delete(`/api/pregunta/${id}`)
    return data
  } catch (error) {
    //console.log(error.response);
    return {data: error.response.data }
  }
}

export const editarPregunta = async(pregunta,id) => {
  const opciones = []
  for (const item in pregunta) {
    if(pregunta[item] !== ''){
      opciones.push(pregunta[item])
    }
  }

  try {
    const {data} = await client.put(`/api/pregunta/${id}`, {opcion: opciones})
    return data
  } catch (error) {
    //console.log(error.response);
    return {data: error.response.data }
  }
}