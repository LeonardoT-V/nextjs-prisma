import { AppBar,MenuItem, Menu, Avatar, Box, Button, Toolbar, Typography, colors } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { cerrarSesionLocal, existeUsuarioGuardado } from '../../utils/localStorage'
import Favicon from '../../public/static/tcm.png'
import Image from 'next/image'
import { Group, LibraryBooks, Logout, PlaylistAdd } from '@mui/icons-material'
const Navbar = () => {

  const router = useRouter()

  const [userData, setUserData] = useState({})
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const closeSesion = () => {
  	cerrarSesionLocal()
    console.log("push");
    location.reload()
    router.push('/')
  }

  const goTo = (path) => {
    router.push(`/${path}`)
  }

  useEffect(() => {
    setUserData(existeUsuarioGuardado())

    console.log("cargado");
  }, [setUserData])

  return (
    <AppBar position='static' sx={{backgroundColor: colors.blue[300]}} elevation={1}>
      <Toolbar>
        <Box sx={{flexGrow: 1, display: 'flex', height: '100%'}}  >
        <Link href='/'>
          <Image src={Favicon} height='50px' width='60px' />
        </Link>
        </Box>

      {
        userData
        ?
        <Box sx={{display:'flex', alignItems: 'center'}}>
          <Avatar alt={userData.username} sx={{background: lightBlue[200]}}
            aria-controls="simple-menu" aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{mt:3}}
          >
              <MenuItem  onClick={() => goTo('crear-encuesta')}>
                <Box alignItems='center' display='flex'> <PlaylistAdd sx={{mr:'10px', color:'#928374'}}/>Crear encuestas</Box> </MenuItem>
              <MenuItem onClick={() => goTo('mis-encuestas')}>
              <Box alignItems='center' display='flex'> <LibraryBooks sx={{mr:'10px', color:'#928374'}}/>Mis encuestas</Box></MenuItem>
              <MenuItem onClick={() => goTo('encuesta-comunidad')}>
              <Box alignItems='center' display='flex'> <Group  sx={{mr:'10px', color:'#928374'}}/>Encuestas comunidad</Box></MenuItem>
              <MenuItem onClick={closeSesion}>
              <Box alignItems='center' display='flex'> <Logout sx={{mr:'10px', color:'#928374'}}/>Cerrar Sesion</Box></MenuItem>
          </Menu>
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