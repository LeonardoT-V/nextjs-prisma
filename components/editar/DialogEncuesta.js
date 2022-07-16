import { Edit } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { editarPregunta, mostrarPreguntas } from '../../utils/preguntaAPI'

const DialogEncuesta = ({ pregunta, setEncuesta, formId}) => {
  const {enqueueSnackbar} = useSnackbar()

  const [abrirVentana, setAbrirVentana] = useState(false)
  const [opcion, setOpcion] = useState({
    opc1: pregunta.opcion[0], opc2: pregunta.opcion[1], opc3: pregunta.opcion[2] ?? '', opc4: pregunta.opcion[3]??''
  })

  const handleClickOpen = () => {
    setAbrirVentana(true);
  };

  const handleClose = () => {
    setAbrirVentana(false);
    setOpcion({
      opc1: pregunta.opcion[0], opc2: pregunta.opcion[1], opc3: pregunta.opcion[2], opc4: pregunta.opcion[3]
    })
  };

  const actualizarPregunta = async(e) => {
    e.preventDefault()
    const {msg} = await editarPregunta(opcion, pregunta.id)

    const {data} = await mostrarPreguntas(formId)
    setEncuesta(data)

    setAbrirVentana(false);
    enqueueSnackbar(msg,{variant:'info'})

  }

  const asignarDatos = (e) => {
    setOpcion({
        ...opcion,
        [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Button color='success' endIcon={<Edit />} onClick={handleClickOpen} >Editar</Button>
      <Dialog open={abrirVentana} onClose={handleClose} >
        <DialogTitle>Formulario de edición</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estas modificando la encuesta: {pregunta.titulo}
          </DialogContentText>
          <TextField onChange={asignarDatos} margin="dense" label="Opcion" name='opc1' fullWidth value={opcion.opc1} required />
          <TextField onChange={asignarDatos} margin="dense" label="Opcion" name='opc2' fullWidth value={opcion.opc2} required />
          <TextField onChange={asignarDatos} margin="dense" label="Opcion" name='opc3' fullWidth value={opcion.opc3} />
          <TextField onChange={asignarDatos} margin="dense" label="Opcion" name='opc4' fullWidth value={opcion.opc4} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={actualizarPregunta}>Editar</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogEncuesta