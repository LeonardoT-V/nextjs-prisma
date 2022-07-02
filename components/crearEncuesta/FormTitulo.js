import { Box, Checkbox, Radio, TextField, Typography } from '@mui/material'
import React from 'react'

const formTitulo = ({formulario, setFormulario}) => {

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }

  const asignarDatosCheck = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.checked
    })
  }

  return (
    <Box>
      <Typography variant='h2' >Empieza agregando lo sigiente</Typography>
      <TextField label='Titulo de la encuesta' name='titulo' fullWidth margin='normal'
        onChange={asignarDatos} required
      />
      <TextField label='Descripcion de la encuesta' name='descripcion' fullWidth margin='normal'
        onChange={asignarDatos} required multiline
      />
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Checkbox checked={formulario.auth} name='auth' onChange={asignarDatosCheck} />
        <Typography variant='body2' >Sera necesario tener una cuenta?</Typography>
      </Box>
    </Box>
  )
}

export default formTitulo