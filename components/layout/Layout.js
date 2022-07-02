import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar'


const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'TCM'}</title>
        <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
      </Head>
      <Navbar />
      <Container sx={{pt: 3}}>
        {children}
      </Container>

    </>

  )
}

export default Layout