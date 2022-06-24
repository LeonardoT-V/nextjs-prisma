import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { cerrarSesionLocal, existeUsuarioGuardado } from '../../utils/localStorage'

const Navbar = () => {

  const router = useRouter()

  const [userData, setUserData] = useState({})
  useEffect(() => {
    setUserData(existeUsuarioGuardado())
  }, [])

  const closeSesion = () => {
  	cerrarSesionLocal()
    router.push('/')
  }

  return (
    <AppBar position='static' color='inherit' elevation={1}>
      <Toolbar>
        <Typography  component="div" sx={{flexGrow: 1}} >
          Examen S.A
        </Typography>

        {/* <Box sx={{flexGrow: 1}}>
          <Button variant='contained' sx={{mx:2}}>casa</Button>
          <Button variant='contained'>see</Button>
        </Box> */}
      {
        userData
        ?
        <Box sx={{display:'flex', alignItems: 'center'}}>
          <Typography variant='body1' sx={{mr:2}}>
            {userData.email}
          </Typography>
          <Avatar alt={userData.username} sx={{background: lightBlue[200]}} />
          <Button color='error' onClick={closeSesion} >salir</Button>
        </Box>
        :
        <Box>
          <Link href='/login'>
            <Button variant='text' sx={{mr: 2}}>Login</Button>
          </Link>
          <Link href='/registro'>
            <Button variant='contained'>Registro</Button>
          </Link>
        </Box>

      }

      </Toolbar>
    </AppBar>
  )
}

export default Navbar