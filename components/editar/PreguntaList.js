import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Dialog, Divider, Grow, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import React from 'react'
import { elimiarPreguntas, mostrarPreguntas } from '../../utils/preguntaAPI'
import DialogEncuesta from './DialogEncuesta'

const PreguntaList = ({encuesta, setEncuesta, formId}) => {
  const {enqueueSnackbar} = useSnackbar()

  const borrarPregunta = async(id) => {
  	const {msg} = await elimiarPreguntas(id)
    enqueueSnackbar(msg,{variant:'error'})

    const {data} = await mostrarPreguntas(formId)
    setEncuesta(data)

  }

  return (
    <>
      {encuesta.map((item, index) => (
        <Grow in={true}>
        <Box key={item.id}>
        <Divider sx={{mb:'16px', width:'90%', mx:'auto', color:'#928374'}}>{index+1}</Divider>
        <Box display='flex' flexDirection='row' justifyContent='space-between' alignContent='center' alignItems='center' mb='16px'>
          <Box>
            <Typography variant='h6'>{item.titulo}</Typography>
            <Typography variant='body2' color='#928374'> Opciones: {item.opcion.length}</Typography>
          </Box>

          <ButtonGroup size='small' variant='outlined' orientation='vertical'>
            {/* <Button color='success' endIcon={<Edit/>}>Editar</Button> */}
            <DialogEncuesta pregunta={item} setEncuesta={setEncuesta} formId={formId}/>
            <Button onClick={() => borrarPregunta(item.id)} color='error' endIcon={<Delete/>}>Borrar</Button>
          </ButtonGroup>
        </Box>
        </Box>
        </Grow>
      ))}
    </>
  )
}

export default PreguntaList