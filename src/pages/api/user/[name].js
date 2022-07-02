import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
export default async(req, res) => {
  // el method trae si es POST, PUT, DELETE, GET
  const { method } = req

  switch( method ) {
    case 'POST':
      await logginAccount(req, res)
      break;
    case 'GET':
      res.json({test: "ger"})
      break;
  }
}

const logginAccount = async(req, res) => {
  try {
    const { query, body } = req
    const userCreado = await prisma.usuario.findFirst({
      where: {
        email: query.name
      }
    })
    res.setHeader("Allow", "POST");

    //Validaciones
    // si el correo no se encuentra en la base de datos
    if( userCreado === null ) {
      res.status(400).json({msg: "No existe este correo", error: true})
      return
    }

    // comparar las contraseñas (entre las que envia el cliente y la base de datos)
    if( bcrypt.compareSync( body.password ,userCreado.password) ) {
      const enviarDato = {
        username: userCreado.username,
        email: userCreado.email,
        id: userCreado.id
      }
      res.status(200).json({data: enviarDato})
    } else {
      res.status(400).json({msg: "Ingrese la contraseña correctamente", error: true})
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({msg: "Ha ocurrido un error", error: true})
  }
}