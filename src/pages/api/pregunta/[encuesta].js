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
      }
    })

    if(pregunta.length === 0) return res.status(200).json({data: []})

    res.status(200).json({data: pregunta})
  }

}