import { Card, Box, CardActions, CardContent, CardHeader, colors, Divider, Grow, Paper, Typography } from '@mui/material'

import React from 'react'
import ContenedorAccion from './ContenedorAccion'



const ItemEncuesta = ({encuesta, setActualizar}) => {


  return (
    <Grow in={true}  >
    <Card>
      <CardHeader
        title={encuesta.titulo}
        subheader={<FechaFormateada fecha={encuesta.publicado}/> }
        sx={{backgroundColor:colors.teal[300], color: colors.teal[900]}}
      />

      <Divider/>

      <CardContent>

          <Typography variant='body1'>{encuesta.descripcion}</Typography>


        <Estado estado={encuesta.estado} />

        <Paper elevation={0} variant='outlined' sx={{p: '5px 15px', mt: '16px', backgroundColor: colors.teal[50]}}>
          <Typography variant='body2'>Preguntas: {encuesta.pregunta.length}</Typography>
          <Typography variant='body2'>Autenticación: {encuesta.auth ? <>{'Requerida'}</>: <>{'Invitado'}</>} </Typography>
        </Paper>

      </CardContent>


      <Divider/>
      <CardActions sx={{justifyContent:'center', backgroundColor:colors.teal[300] }}>
        <ContenedorAccion estado={encuesta.estado} id={encuesta.id} setActualizar={setActualizar}/>
      </CardActions>

    </Card>
    </Grow>
  )
}

const Estado = ({estado}) => {
  const {azul_l, azul_d, verde_l, verde_d} = {
    azul_l: colors.blue[100], azul_d: colors.blue[900],
    verde_l: colors.green[100], verde_d: colors.green[900]
  }
  const {tx_Pub, tx_Sav} = {
    tx_Pub: 'Publicado',
    tx_Sav: 'Guardado'
  }

  return (
    <Box bgcolor={ estado ? azul_l : verde_l } sx={{borderRadius: '4px', p:'5px', mt:'16px'}}>
      <Typography variant='h6' color={estado ? azul_d : verde_d} textAlign='center' >
        {estado ? tx_Pub : tx_Sav}
      </Typography>
    </Box>
  )
}

function FechaFormateada({fecha}) {
  const date = new Date(fecha)

  return (
    <Typography sx={{color: colors.common.white}}>{date.toLocaleString('es',{month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}</Typography>
  )
}

export default ItemEncuesta