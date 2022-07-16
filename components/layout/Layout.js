import { Box, colors, Container, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar'


const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'TCM'}</title>
        <link rel="shortcut icon" type="image/png" href="/static/tcm.png" />
        <meta property="og:title" content='TCM Encuestas digitales'  />
        <meta property="og:description" content='Crear tus encuestas y compartelas con todos' />
        <meta property="og:image" content="/static/favicon.ico" />
      </Head>
      <Navbar />
      <Container sx={{pt: 3}}>
        {children}
      </Container>


    </>

  )
}

export default Layout