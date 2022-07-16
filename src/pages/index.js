import { CloudOutlined, DevicesOutlined, ExpandMore, GolfCourse, Handshake, PrivacyTipOutlined } from '@mui/icons-material'
import { Box, Button, colors, Divider, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout/Layout'
import Portada from '../../public/static/portada-img.png'
import Contactanos from '../../components/UI/Contactanos'


const index = () => {
  return (
    <>
    <Layout title='TCM Encuesta digitales ' >

      <Paper sx={{p:'16px', display:'flex',mb:'32px', '@media(max-width:700px)':{flexDirection:'column-reverse'}}}>
        <Box sx={{p:'16px', m:'auto'}}>
          <Typography variant='h3' color='#3c3836' >Crea encuestas a tus necesidades</Typography>

          <Paper variant='outlined' sx={{my:'16px', p:'16px',color:'#7c6f64'}}>
            <Typography mb={1} variant='h6'>Pensado para docentes y estudiantes.</Typography>
            <Typography mb={1} variant='h6'>Facil de usar y compartir.</Typography>
            <Typography mb={1} variant='h6'>Resultados disponibles todo el tiempo.</Typography>
          </Paper>

          <Link href='/login'>
            <Button variant='contained'>Empieza ahora</Button>
          </Link>

        </Box>
        <Box sx={{p:'16px', m:'auto'}}>
          <Image src={Portada} alt='portada' />
        </Box>
      </Paper>
    <Divider light={true} > <ExpandMore /> </Divider>
    <Typography color='#3c3836' mt={1} variant='h4' textAlign='center'>Que ofrecemos</Typography>
        <Grid container spacing={4} sx={{justifyContent: 'space-evenly',p:'32px 16px'}} >
        <Grid item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
          <Paper sx={{p:'16px'}} >
            <DevicesOutlined fontSize='large' sx={{color: colors.green[900], backgroundColor:colors.green[100],p:'10px', width:'64px', height:'64px', borderRadius: '5px'}}/>
            <Typography color='#3c3836' mt={1} variant='h6'>Compatible</Typography>
            <Typography color='#7c6f64' variant='body1'>Usa la aplicación en todos tus dispositivos sin problemas</Typography>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{textAlign:'center'}} >
          <Paper sx={{p:'16px'}} >
            <CloudOutlined fontSize='large' sx={{color: colors.blue[900], backgroundColor:colors.blue[100],p:'10px', width:'64px', height:'64px', borderRadius: '5px'}}/>
            <Typography color='#3c3836' mt={1} variant='h6'>En la Nube</Typography>
            <Typography color='#7c6f64' variant='body1'>La aplicación funcionara donde quiera que estes gracias al internet</Typography>
          </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{textAlign:'center'}}>
          <Paper sx={{p:'16px'}} >
            <PrivacyTipOutlined fontSize='large' sx={{color: colors.yellow[900], backgroundColor:colors.yellow[100],p:'10px', width:'64px', height:'64px', borderRadius: '5px'}}/>
            <Typography color='#3c3836' mt={1} variant='h6'>Seguridad</Typography>
            <Typography color='#7c6f64' variant='body1'>Tus datos son privados y no seran usados sin consentimiento</Typography>
          </Paper>
          </Grid>
        </Grid>

        <Divider light={true} > <ExpandMore /> </Divider>

        <Typography color='#3c3836' mt={1} variant='h4' textAlign='center'>Sobre nosotros</Typography>
        <Grid container spacing={4} sx={{justifyContent: 'space-evenly',p:'32px 16px'}} >
        <Grid item xs={12} sm={5}  sx={{textAlign:'center'}}>
          <Paper sx={{p:'16px'}} >
            <Handshake fontSize='large' sx={{color: colors.indigo[900], backgroundColor:colors.indigo[100],p:'10px', width:'64px', height:'64px', borderRadius: '5px'}}/>
            <Typography color='#3c3836' mt={1} variant='h6'>Misión</Typography>
            <Typography color='#7c6f64' variant='body1'>Otorgar herramientas digitales para facilitar la recolección y procesamiento de datos,
              además de presentación de resultados visuales al instante.</Typography>
          </Paper>
          </Grid>
          <Grid item xs={12} sm={5}  sx={{textAlign:'center'}} >
          <Paper sx={{p:'16px'}} >
            <GolfCourse fontSize='large' sx={{color: colors.red[900], backgroundColor:colors.red[100],p:'10px', width:'64px', height:'64px', borderRadius: '5px'}}/>
            <Typography color='#3c3836' mt={1} variant='h6'>Visión</Typography>
            <Typography color='#7c6f64' variant='body1'>Ser empresa líder a nivel local de generación y distribución de encuestas digitales
              accesibles, fáciles de administrar y compartir.</Typography>
          </Paper>
          </Grid>
        </Grid>

      <Divider light={true} > <ExpandMore /> </Divider>

    <Contactanos />

    </Layout>

    <Divider light={true} > <ExpandMore /> </Divider>


    <Box component='footer' sx={{backgroundColor: colors.blue[800], p:'16px', color:'white',mt: '32px' ,textAlign:'center'}}>
        <Typography> Todos los derechos reservados &copy; 2022 </Typography>
        <Typography> Leonardo Toro - Luis Morales - Anthony Carranza </Typography>
      </Box>
    </>
  )
}

export default index