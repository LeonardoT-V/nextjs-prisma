import { Box, Button, Grow, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import FormTitulo from '../../../components/crearEncuesta/FormTitulo'
import { existeUsuarioGuardado, usuarioIdLocal } from '../../../utils/localStorage'
import { useRouter } from 'next/router'
import { crearEncuesta } from '../../../utils/encuestaAPI'

const index = () => {

  const router = useRouter();
  const dataUser = existeUsuarioGuardado();
  useEffect(() => {
    if(!dataUser) {
      router.push('/login')
      return
    };

  }, [])

  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    auth: false,
  })

  const publicarEncuesta = async(e) => {
    e.preventDefault();
    const usuarioId = usuarioIdLocal()

    const {data} = await crearEncuesta({
      titulo: formulario.titulo,
      descripcion: formulario.descripcion,
      auth: formulario.auth,
      usuario: usuarioId
    })

    router.push(`/editar-encuesta/${data.id}`)
  }

  return (

    <Layout title='Crear encuesta'>
      <Paper sx={{p: 8, width: '80%', m:'auto', '@media(max-width:700px)': {p: 2, width:'90%'}}} variant='outlined'>
        <form onSubmit={publicarEncuesta}>
          <FormTitulo  formulario={formulario} setFormulario={setFormulario} />
          <Button sx={{mt:2 }} variant='outlined' size='large' type='submit'>Continuar</Button>
        </form>
      </Paper>
    </Layout>
  )
}

export default index