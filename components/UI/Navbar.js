import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {



  return (
    <AppBar position='static' color='inherit' elevation={1}>
      <Toolbar>
        <Typography  component="div" sx={{flexGrow: 1}} >
          Examen S.A
        </Typography>
    {/*
        <Box sx={{flexGrow: 1}}>
          <Button variant='contained' sx={{mx:2}}>casa</Button>
          <Button variant='contained'>see</Button>
        </Box> */}

        <Box>
          <Link href='/login'>
            <Button variant='text' sx={{mr: 2}}>Login</Button>
          </Link>
          <Link href='/registro'>
            <Button variant='contained'>Registro</Button>
          </Link>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar