import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "GET" ){
    const { id } = req.query

    const encuesta = await prisma.encuesta.findFirst({
      where: {
        id: parseInt(id)
      },
      include: {
        pregunta: true,
        usuario: true
      }
    })

    res.status(200).json({data: encuesta})
  }

}