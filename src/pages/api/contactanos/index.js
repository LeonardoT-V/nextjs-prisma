import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const {email, mensaje} = req.body
    await prisma.contactanos.create({
      data: {
        email,
        mensaje
      }
    })

    return res.status(200).json({msj: "enviado correctamente"})

  }

}