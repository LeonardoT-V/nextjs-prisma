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
        pregunta: {
          include: {
            respuesta: true
          }
        }
      },
      orderBy: {
        publicado: 'desc'
      }
    })

    return res.status(200).json({data: encuesta})
  }
  else if ( req.method === 'DELETE' ) {
    const { id } = req.query

    await prisma.encuesta.delete({
      where:{
        id: parseInt(id)
      }
    })

    res.json({msg: 'Borrado correctamente'})
  }

  else if ( req.method === 'PUT' ) {
    const { id } = req.query
    const { estado, titulo, descripcion, auth } = req.body

    const encuesta = await prisma.encuesta.update({
      where: {
        id: parseInt(id)
      },
      data: {
        titulo,
        estado,
        descripcion,
        auth
      }
    })

    res.json()





  }
}
