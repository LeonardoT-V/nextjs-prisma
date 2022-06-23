import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const user = req.body
    console.log(req.body);
    const usuario = await prisma.usuario.create({
      data: {
        username: user.username,
        password: user.password,
        email: user.email
      }
    })
    res.status(200).json(usuario)
  }
}
