import { AppBar,MenuItem, Menu, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { cerrarSesionLocal, existeUsuarioGuardado } from '../../utils/localStorage'
import Favicon from '../../public/favicon.ico'
import Image from 'next/image'
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
    <AppBar position='static' color='inherit' elevation={1}>
      <Toolbar>
        <Box sx={{flexGrow: 1, display: 'flex', height: '100%'}}  >
          <Image src={Favicon} />
          <Typography  component="div"  >
            TCM
          </Typography>
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
              <MenuItem onClick={() => goTo('crear-encuesta')}>Crear encuestas</MenuItem>
              <MenuItem onClick={() => goTo('login')}>Mis encuestas</MenuItem>
              <MenuItem onClick={() => goTo('')}>Ver Encuestas</MenuItem>
              <MenuItem onClick={closeSesion}>Cerrar Sesion</MenuItem>
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