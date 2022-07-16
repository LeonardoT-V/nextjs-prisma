import React from 'react'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { DeleteForever, Upload, Edit, Share, PieChartOutline } from '@mui/icons-material'
import { eliminarUnaEncuesta, publicarUnaEncuesta } from '../../utils/encuestaAPI'

const ContenedorAccion = ({estado, id, setActualizar}) => {

  const router = useRouter()
  const {enqueueSnackbar} = useSnackbar()

  const editarEditarEncuesta =(id) => {
    router.push(`/editar-encuesta/${id}`)
  }

  const borrarEncuesta = async(id) => {
    const {msg} = await eliminarUnaEncuesta(id)
    setActualizar(true)
    enqueueSnackbar(msg, {variant: 'error'})
  }

  const publicarEncuesta = async(id) => {
    const {msg} = await publicarUnaEncuesta(id)
    setActualizar(true)
    enqueueSnackbar(msg, {variant: 'info'})
  }
  const resultadosEncuesta = (id) => {
    router.push(`/resultados/${id}`)
  }


  const compartirEnlace =(id) => {
    navigator.clipboard.writeText(`${window.location.origin}/responder/${id}`)
    enqueueSnackbar('Enlace copiado', {variant: 'default'})

  }

	return (
    <>
      <IconButton onClick={() => borrarEncuesta(id)}  color='error'> <DeleteForever/> </IconButton>
      { estado
      ? <>
        <IconButton onClick={() => resultadosEncuesta(id)} color='warning'> <PieChartOutline/> </IconButton>
        <IconButton onClick={() => compartirEnlace(id)} > <Share/> </IconButton>
      </>
      : <>
        <IconButton onClick={() => editarEditarEncuesta(id)} color='success'> <Edit/> </IconButton>
        <IconButton onClick={() => publicarEncuesta(id)} color='info'> <Upload/> </IconButton>
      </>}
    </>
  )
}

export default ContenedorAccion