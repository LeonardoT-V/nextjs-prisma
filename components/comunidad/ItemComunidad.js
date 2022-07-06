import { Face, ListAlt, LockOpenOutlined } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grow, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'

const ItemComunidad = ({encuesta}) => {

  const router = useRouter();

  return (
    <Grow in={true}>
      <Card>
        <CardHeader
          title = {encuesta.usuario.email}
          subheader={encuesta.publicado}
          avatar={<Avatar variant='rounded' >{encuesta.usuario.username[0]}</Avatar>}
        />
        <Divider />
        <CardContent>
          <Typography variant='h5' >{encuesta.titulo}</Typography>
          <Typography color='#2b2b2' variant='body2'>{encuesta.descripcion}</Typography>

          <Paper elevation={0} variant='outlined' sx={{p: '5px 15px', mt: '16px'}}>
            <Box sx={{display: 'flex', alignItems:'center'}}>
              <ListAlt color='primary' sx={{mr:'10px'}}/>
              <Typography variant='body2'>Preguntas: {encuesta.pregunta.length}</Typography>
            </Box>
            {encuesta.auth ? <Box sx={{display: 'flex', alignItems:'center', mt: '10px'}}>
              <LockOpenOutlined color='primary' sx={{mr:'10px'}} />
              <Typography variant='body2'>Es necesario tener una cuenta</Typography>
            </Box> : <></>}

          </Paper>
        </CardContent>

        <CardActions sx={{justifyContent:'center', mt:'0'}}>
          <Button variant='outlined' onClick={() => router.push(`/responder/${encuesta.id}`)} >Responder</Button>
        </CardActions>
      </Card>
    </Grow>
  )
}

export default ItemComunidad