import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if( req.method == "GET" ){
    const { id } = req.query
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
        preguntaId: parseInt(id)
      }
    })
    res.status(200).json({data: encuesta})
  }
}