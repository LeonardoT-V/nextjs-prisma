import { Button, Paper, TextField, Typography, Link} from '@mui/material'
import NLink from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import Layout from '../../../components/layout/Layout'
import { insertarUsuarioLocal } from '../../../utils/localStorage'
import { loginUser } from '../../../utils/usuarioAPI'

const index = () => {
  const router = useRouter()
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    msg: '',
    visible: false
  })

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }
  const loginAccount = async(e) => {
  	e.preventDefault()
    const {data} = await loginUser(formulario)
    const success =  {
      username: data.username,
      email: data.email,
      id: data.id,
    }
    if(data.error === true){
      setError({msg: data.msg, visible: true})
      return
    } else {
      setError({msg: '', visible: false})
      insertarUsuarioLocal(success)
      router.push('/registro')
    }
  }

  return (
    <Layout title="Login">
      <Paper sx={{p: 10, width: '60%', m:'auto', '@media(max-width:700px)': {p: 2, width:'90%'}}} variant='outlined'>
      <Typography variant='h2'>
        Iniciar Sesion
      </Typography>

      <form onSubmit={loginAccount}>
        <TextField label='Correo electronico' id='txt_email' type='email' fullWidth margin='normal'
          defaultValue={formulario.email} name='email' onChange={asignarDatos} required/>
        <TextField label='Contraseña' id='txt_password' type='password' fullWidth margin='dense'
          defaultValue={formulario.password} name='password' onChange={asignarDatos} required/>
        <Button fullWidth variant='contained' size='large' sx={{mt:3}} type='submit' >Ingresar</Button>
      </form>

        {error.visible ? <Typography variant='body2' sx={{mt:3, mx:'auto', textAlign: 'center', color:'red' }}>{error.msg}</Typography>: <></> }


      <Typography variant='body2' sx={{mt:3, mx:'auto', textAlign: 'center' }} >
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