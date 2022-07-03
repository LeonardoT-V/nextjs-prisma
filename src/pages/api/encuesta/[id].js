import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "GET" ){
    const { id } = req.query

    const encuesta = await prisma.encuesta.findMany({
      where: {
        usuarioId: parseInt(id)
      },
      include:{
        pregunta: true
      }
    })

    return res.status(200).json({data: encuesta})
  }
}
