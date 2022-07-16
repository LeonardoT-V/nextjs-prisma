import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "GET" ){
    const { encuesta } = req.query

    const encComprobar = await prisma.encuesta.findFirst({
      where: {
        id: parseInt(encuesta)
      }
    })

    if( !encComprobar) return res.status(400).json({error: true})

    const pregunta = await prisma.pregunta.findMany({
      where: {
        encuestaId: parseInt(encuesta)
      },
      orderBy: {
        id: 'asc'
      }
    })

    if(pregunta.length === 0) return res.status(200).json({data: []})

    res.status(200).json({data: pregunta})
  }
  else if( req.method === 'POST') {
    const { titulo, opciones } = req.body
    const { encuesta } = req.query

    const final = await prisma.pregunta.create({
      data: {
        encuestaId: parseInt(encuesta),
        titulo,
        opcion: opciones
      }
    })
    console.log(titulo, opciones);
    return res.status(200).json({msg: 'Pregunta agregada', data:final})
  }
  else if(req.method === 'DELETE') {
    const { encuesta } = req.query
    await prisma.pregunta.delete({
      where: {
        id: parseInt(encuesta)
      }
    })
    return res.status(200).json({msg: 'Pregunta eliminada'})
  }
  else if(req.method === 'PUT'){
    const { encuesta } = req.query
    const { opcion } = req.body
    console.log(opcion);
    await prisma.pregunta.update({
      where:{
        id:  parseInt(encuesta),
      },
      data: {
        opcion
      },
    })

    return res.status(200).json({msg: 'Pregunta actualizada'})
  }
}