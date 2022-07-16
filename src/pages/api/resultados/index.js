import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const { pregunta } = req.body
    console.log(pregunta);
    const encuesta = await prisma.respuesta.createMany({
      data: pregunta
    })
    res.status(200).json({data: encuesta, msg:'Gracias por contestar'})
  }
  else if( req.method == "GET" ){
    const { preguntaId } = req.body
    const encuesta = await prisma.respuesta.groupBy({
      by: ['valor'],
      _sum: {
        id: true,
        preguntaId: true
      },
      _count: {
        _all: true
      },
      where: {
        preguntaId: parseInt(preguntaId)
      }
    })
    res.status(200).json({data: encuesta})
  }

}