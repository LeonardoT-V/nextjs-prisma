import { Box, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'



const ItemResponder = ({pregunta, setRespuesta, respuesta, index}) => {

  const seleccionarOpcion = (e, id) => {
    setRespuesta({
        ...respuesta,
        [id]: e.target.value
      })
  }

  return (
    <Box>
      <Typography variant='h5' color="#3c3836" >{index+1}) {pregunta.titulo}</Typography>
      <Box sx={{mx: '32px', my: '16px', '@media(max-width:700px)': {mx:'16px'}}}>
      { pregunta.opcion.length !== 0
        ?
        <RadioGroup name={pregunta.titulo} onChange={(e)=> seleccionarOpcion(e, pregunta.id)}>
        { pregunta.opcion.map(item => (
            <FormControlLabel value={item} control={<Radio />} label={item} key={item} />
            ))}
        </RadioGroup>
        : <TextField label='Ingrese su respuesta' size='small' fullWidth
          name={pregunta.titulo} onChange={(e)=> seleccionarOpcion(e, pregunta.id)}
          />
      }
      </Box>

    </Box>
  )
}

export default ItemResponder