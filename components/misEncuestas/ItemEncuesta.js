import { DeleteForever, Upload, Edit, Share, PieChartOutline } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardHeader, colors, Divider, IconButton, Paper, Typography } from '@mui/material'

import { Box } from '@mui/system'
import React from 'react'

const ItemEncuesta = ({encuesta}) => {

  return (
    <Card>
      <CardHeader
        title={encuesta.titulo}
        subheader={encuesta.publicado}
      />

      <Divider/>

      <CardContent>

          <Typography variant='body1'>{encuesta.descripcion}</Typography>


        <Estado estado={encuesta.estado} />

        <Paper elevation={0} variant='outlined' sx={{p: '5px 15px', mt: '16px'}}>
          <Typography variant='body2'>Preguntas: {encuesta.pregunta.length}</Typography>
          <Typography variant='body2'>Autenticación: {encuesta.auth ? <>{'Requerida'}</>: <>{'Invitado'}</>} </Typography>
        </Paper>

      </CardContent>

      <Divider/>
      <CardActions sx={{justifyContent:'center'}}>
        <Botones estado={encuesta.estado}/>
      </CardActions>

    </Card>
  )
}

const Botones = ({estado}) => {

  if( estado ) {
    return (
      <>
        <IconButton color='warning'> <PieChartOutline/> </IconButton>
        <IconButton color='error'> <DeleteForever/> </IconButton>
        <IconButton > <Share/> </IconButton>
      </>
    )
  }

	return (
    <>
      <IconButton color='success'> <Edit/> </IconButton>
        <IconButton color='error'> <DeleteForever/> </IconButton>
        <IconButton color='info'> <Upload/> </IconButton>
    </>
  )
}

const Estado = ({estado}) => {
  if( estado ) {
    return (
      <Box bgcolor={colors.blue[100]} sx={{borderRadius: '4px', p:'5px', mt:'16px'}}>
        <Typography variant='h6' color={colors.blue[900]} textAlign='center' >Publicado</Typography>
      </Box>
    )
  }

  return (
    <Box bgcolor={colors.green[100]} sx={{borderRadius: '4px', p:'5px', mt:'16px'}}>
      <Typography variant='h6' color={colors.green[900]} textAlign='center' >Guardado</Typography>
    </Box>
  )
}

export default ItemEncuesta