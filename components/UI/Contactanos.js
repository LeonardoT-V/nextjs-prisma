import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {crearContacto} from '../../utils/contactanosAPI'
const Contactanos = () => {

  const [formulario, setFormulario] = useState({
    email: '',
    mensaje: ''
  })

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }
  console.log(formulario);
  const enviarMensaje = async(e) => {
    e.preventDefault()
    await crearContacto(formulario)
    setFormulario({
      email: '',
      mensaje: ''
    })
  }

  return (
    <Paper sx={{p:'32px', width:'50%', mx:'auto', my: '32px'}}>
      <Typography variant='h4' >Envianos un mensaje</Typography>
      <Typography variant='body2' sx={{my:'12px'}}>Llena el formulario para contactarnos a su corre electronico</Typography>
      <form onSubmit={enviarMensaje}>
        <TextField label='Correo electronico' type='email' fullWidth margin='normal'
            value={formulario.email} name='email' onChange={asignarDatos} required/>
        <TextField label='Mensaje' fullWidth margin='normal'
            value={formulario.mensaje} name='mensaje' onChange={asignarDatos} required/>
        <Button type='submit'>Contactanos ahora</Button>
      </form>
    </Paper>
  )
}

export default Contactanos
