import React from 'react'
import { colors, IconButton } from '@mui/material'
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
      <IconButton onClick={() => borrarEncuesta(id)} sx={{'&:hover':{backgroundColor: colors.red[200],color: colors.red[900], transition:'.3s all'}}}  > <DeleteForever/> </IconButton>
      { estado
      ? <>
        <IconButton onClick={() => resultadosEncuesta(id)} sx={{'&:hover':{backgroundColor: colors.amber[200],color: colors.amber[900], transition:'.3s all'}}}> <PieChartOutline/> </IconButton>
        <IconButton onClick={() => compartirEnlace(id)} sx={{'&:hover':{backgroundColor: colors.brown[200],color: colors.brown[900], transition:'.3s all'}}} > <Share/> </IconButton>
      </>
      : <>
        <IconButton onClick={() => editarEditarEncuesta(id)} sx={{'&:hover':{backgroundColor: colors.green[200],color: colors.green[900], transition:'.3s all'}}}> <Edit/> </IconButton>
        <IconButton onClick={() => publicarEncuesta(id)} sx={{'&:hover':{backgroundColor: colors.blue[200],color: colors.blue[900], transition:'.3s all'}}}> <Upload/> </IconButton>
      </>}
    </>
  )
}

export default ContenedorAccion