import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "PUT" ){
    const { estado, id } = req.body

    await prisma.encuesta.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado
      }
    })

    return res.status(200).json({msg: "Encuesta publica para responder"})
  } else if ( req.method === "GET" ) {
    res.json({hola: "prueba api"})
  }
}