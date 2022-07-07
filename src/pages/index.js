import { DesktopWindows, Laptop, PhoneAndroid } from '@mui/icons-material'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout/Layout'
import Portada from '../../public/static/portada-img.png'

const index = () => {
  return (
    <Layout >
      <h1>Pagina de inicio</h1>
      <Link href='/crear-encuesta'>Crear encuesta</Link>

      <Paper sx={{p:'16px', display:'flex', '@media(max-width:700px)':{flexDirection:'column-reverse'}}}>
        <Box sx={{p:'16px', m:'auto'}}>
          <Typography variant='h3' width='100%' >Crea encuestas a tus necesidades</Typography>

          <Paper variant='outlined' sx={{my:'16px', p:'16px'}} >
            <Typography mb={1} variant='h6'>Pensado para docentes y estudiantes</Typography>
            <Typography mb={1} variant='h6'>Facil de usar y compartir</Typography>
            <Typography mb={1} variant='h6'>Resultados disponibles todo el tiempo</Typography>
          </Paper>

          <Link href='/login'>
            <Button variant='contained'>Empieza ahora</Button>
          </Link>

        </Box>
        {/* <Divider orientation='vertical' flexItem={true}  /> */}
        <Box sx={{p:'16px', m:'auto'}}>
          {/* <Typography variant='h3'>Compatible con tus dispositivos:</Typography>

          <Box sx={{display: 'flex', alignItems:'center'}}>
            <DesktopWindows />
            <Typography variant='h5'>Escritorios</Typography>
          </Box>

          <Box sx={{display: 'flex', alignItems:'center'}}>
            <Laptop />
            <Typography variant='h5'>Laptop</Typography>
          </Box>

          <Box sx={{display: 'flex', alignItems:'center'}}>
            <PhoneAndroid />
            <Typography variant='h5'>Moviles</Typography>
          </Box> */}
          <Image src={Portada} />

        </Box>


      </Paper>

    </Layout>
  )
}

export default index