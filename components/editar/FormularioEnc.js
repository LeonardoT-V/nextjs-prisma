import { Add } from '@mui/icons-material'
import { Box, Button, Paper, Switch, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { insertarPreguntas, mostrarPreguntas } from '../../utils/preguntaAPI'

const FormularioEnc = ({formId, setEncuesta}) => {
  const {enqueueSnackbar} = useSnackbar()

  const [tipoOpcion, setTipoOpcion] = useState(true)
  const [pregunta, setPregunta] = useState({titulo:'', opc1:'', opc4:'',opc3:'',opc2:''})
  console.log(pregunta);
  const asignarDatos = (e) => {
    setPregunta({
        ...pregunta,
        [e.target.name]: e.target.value
    })
  }

  const agregarPregunta = async(e) => {
    e.preventDefault()

    const {msg} = await insertarPreguntas(pregunta, formId);
    enqueueSnackbar(msg, {variant: 'success' })

    setPregunta({})
    const {data} = await mostrarPreguntas(formId)
    setEncuesta(data)
    setPregunta({titulo:'', opc1:'', opc4:'',opc3:'',opc2:''})
  }

  return (
    <form onSubmit={agregarPregunta}>
      <TextField value={pregunta.titulo} name='titulo' onChange={asignarDatos} label='Ingresa el titulo' variant="outlined" fullWidth required />
      <Box display='flex' alignItems='center' justifyContent='space-around' my='16px'>
        <Typography variant='body2'>Menu de Opciones</Typography>
        <Box display='flex' alignItems='center'>
          <Typography variant='body2'>Texto</Typography>
          <Switch  onChange={() => setTipoOpcion(tipoOpcion ? false : true)}/>
          <Typography variant='body2'>Selección</Typography>
        </Box>
      </Box>
      <Paper id='contenedor-pre' variant='outlined' sx={{p:'0 32px 16px 32px'}}>
        <TextField onChange={asignarDatos} value={pregunta.opc1} name='opc1' label="Ingrese opcion" margin='dense' variant="standard" fullWidth  disabled={tipoOpcion} required />
        <TextField onChange={asignarDatos} value={pregunta.opc2} name='opc2' label="Ingrese opcion" margin='dense' variant="standard" fullWidth  disabled={tipoOpcion} required />
        <TextField onChange={asignarDatos} value={pregunta.opc3} name='opc3' label="Ingrese opcion (opcional)" margin='dense' variant="standard" fullWidth  disabled={tipoOpcion} />
        <TextField onChange={asignarDatos} value={pregunta.opc4} name='opc4' label="Ingrese opcion (opcional)" margin='dense' variant="standard" fullWidth  disabled={tipoOpcion} />
        <Button endIcon={<Add />}  size='small' type='submit' sx={{mt:'16px'}} >Agregar pregunta</Button>
      </Paper>
    </form>
  )
}

export default FormularioEnc