import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const {titulo, opcion, encuestaId} = req.body
    const pregunta = await prisma.pregunta.create({
      data: {
        titulo,
        opcion,
        encuestaId
      }
    })
    res.status(200).json({data: pregunta})
  }
  else if ( req.method === "GET" ) {
    const { id } = req.body
    const pregunta = await prisma.pregunta.findFirst({
      where: {
        encuestaId: id
      }
    })

    res.status(200).json({data: pregunta})
  }
}
