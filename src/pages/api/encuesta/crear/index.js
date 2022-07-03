import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const {titulo, descripcion, auth, usuario} = req.body

    const encuesta = await prisma.encuesta.create({
      data: {
        titulo,
        descripcion,
        auth,
        usuarioId: usuario
      }
    })

    res.status(200).json({data: encuesta})
  } else if ( req.method === "GET" ) {
    res.json({hola: "prueba api"})
  }
}
