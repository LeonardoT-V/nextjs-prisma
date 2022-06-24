import { Button, Paper, TextField, Typography, Link} from '@mui/material'
import NLink from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import Layout from '../../../components/layout/Layout'
import { createUser } from '../../../utils/usuarioAPI'

const index = () => {

  const router = useRouter()
  const [formulario, setFormulario] = useState({
    email: '',
    password: '',
    username: ''
  })

  // const [error, setError] = useState({
  //   msg: '',
  //   visible: false
  // })

  const asignarDatos = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
  }

  const registerAccount = async(e) => {
  	e.preventDefault()
    const {data} = await createUser(formulario);
    const success =  {
      username: data.username,
      email: data.email
    }
    localStorage.setItem("usuario", JSON.stringify(success));
    router.push('/login')
  }

  return (
    <Layout title="Registro">
      <Paper sx={{p: 8, width: '60%', m:'auto', '@media(max-width:700px)': {p: 2, width:'90%'}}} variant='outlined'>
      <Typography variant='h2'>
        Crea una cuenta
      </Typography>

      <form onSubmit={registerAccount}>
        <TextField label='Correo electronico' id='txt_email' type='email' fullWidth margin='normal'
          defaultValue={formulario.email} name='email' onChange={asignarDatos} />
        <TextField label='Nombre de usuario' id='txt_username' type='text' fullWidth margin='dense'
          defaultValue={formulario.username} name='username' onChange={asignarDatos}/>
        <TextField label='Contraseña' id='txt_password' type='password' fullWidth margin='dense'
          defaultValue={formulario.password} name='password' onChange={asignarDatos}/>
        <Button fullWidth variant='contained' size='large' sx={{mt:3}} type='submit' >Registrate</Button>
      </form>

        {/* {error.visible ? <Typography variant='body2' sx={{mt:3, mx:'auto', textAlign: 'center', color:'red' }}>{error.msg}</Typography>: <></> } */}

      <Typography variant='body2' sx={{mt:3, mx:'auto', textAlign: 'center' }} >
        Tienes una cuenta? {' '}
        <NLink href='/login'>
          <Link sx={{'&:hover':{cursor:'pointer'}}}>
            inicia sesión
          </Link>
        </NLink>
      </Typography>

      </Paper>
    </Layout>
  )
}

export default index