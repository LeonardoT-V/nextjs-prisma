import { Button, Paper, TextField, Typography, Link} from '@mui/material'
import NLink from 'next/link'
import React, {useState} from 'react'
import Layout from '../../../components/layout/Layout'

const index = () => {

  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  })

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
}

  const loginAccount =(e) => {
  	e.preventDefault()
    console.log(formulario);
  }

  return (
    <Layout title="Login">
      <Paper sx={{p: 10, width: '60%', m:'auto'}} variant='outlined'>
      <Typography variant='h2'>
        Iniciar Sesion
      </Typography>

      <form onSubmit={loginAccount}>
        <TextField label='Correo electronico' id='txt_email' type='email' fullWidth margin='normal'
          defaultValue={formulario.email} name='email' onChange={asignarDatos}/>
        <TextField label='Contraseña' id='txt_password' type='password' fullWidth margin='dense'
          defaultValue={formulario.password} name='password' onChange={asignarDatos}/>
        <Button fullWidth variant='contained' size='large' sx={{mt:3}} type='submit' >Login</Button>
      </form>

      <Typography variant='body2' sx={{mt:3, mx:'auto', textAlign: 'center'}}>
        No tienes una cuenta? Cree una{' '}
        <NLink href='/registro'>
          <Link sx={{'&:hover':{cursor:'pointer'}}}>
            aqui
          </Link>
        </NLink>
      </Typography>

      </Paper>
    </Layout>
  )
}

export default index