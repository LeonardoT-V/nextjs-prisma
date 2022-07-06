import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "GET" ){

    const encuestas = await prisma.encuesta.findMany({
      where: {
        estado: true
      },
      orderBy: {
        publicado: 'desc'
      },
      include: {
        pregunta: true,
        usuario: true
      }
    })

    return res.status(200).json({data: encuestas})

  }

}