import { Send } from '@mui/icons-material'
import { Box, Button, colors, Divider, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import ItemResponder from '../../../components/responder/ItemResponder'
import { existeUsuarioGuardado } from '../../../utils/localStorage'
import { enviarRespuesta, obtenerEncuestaPregunta } from '../../../utils/respuestaAPI'

const index = ({data}) => {

  const router = useRouter()
  const [encuesta, setEncuesta] = useState(data)
  const [respuesta, setRespuesta] = useState({})
  console.log(respuesta);




  useEffect(() => {
    function Comprobar() {
      if( !existeUsuarioGuardado ){
        console.log("no existe");
        return (
          <Layout>
            <h1>Cuenta necesaria</h1>
          </Layout>
        )
      }
    }
    Comprobar()
  }, [])


  const enviarResultadosNube = async() => {
    await enviarRespuesta(respuesta)
    router.push('/encuesta-comunidad')
  }


  return (
    <Layout title={encuesta.titulo}>
      <Paper sx={{mb: '24px'}}>
        <Box sx={{p:'16px', background: colors.cyan[100] }}>
          <Typography variant='h2' sx={{color: '#3c3836', textAlign: 'center'}}>{encuesta.titulo}</Typography>
        </Box>
        <Box sx={{px:'32px', py: '16px' }}>
          <Typography variant='subtitle1' sx={{color: '#3c3836'}} >{encuesta.descripcion}</Typography>
          <Typography variant='subtitle2' sx={{color: '#7c6f64', mt:'5px'}} >
            Creado por: {encuesta.usuario.email}</Typography>
        </Box>

        <Divider />


        <Box sx={{p:'32px 64px', '@media(max-width:700px)': {p: '16px 32px'}}}>
          { encuesta.pregunta.map((item, index) => (
            <ItemResponder pregunta={item} key={item.id} index={index}
            respuesta={respuesta} setRespuesta={setRespuesta}
            />
          ))}

          <Divider>
            <Button onClick={enviarResultadosNube} variant='contained' size='large' fullWidth endIcon={<Send />} > Enviar Respuestas </Button>
          </Divider>

        </Box>

      </Paper>
    </Layout>
  )
}


export async function getServerSideProps({params}) {
  const { id } = params
 const {data} = await obtenerEncuestaPregunta(id)
  return { props: { data } }
}

export default index