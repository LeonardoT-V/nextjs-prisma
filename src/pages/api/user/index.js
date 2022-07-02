import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async(req, res) => {
  if ( req.method == "POST" ){
    const user = req.body
    console.log(req.body);
    const crytedPass = bcrypt.hashSync(user.password, 8)

    const usuario = await prisma.usuario.create({
      data: {
        username: user.username,
        password: crytedPass,
        email: user.email
      }
    })

    res.status(200).json({data:usuario})
  }
}
