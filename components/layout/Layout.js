import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar'

const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'proyecto'}</title>
      </Head>
      <Navbar />
      <Container sx={{pt: 5}}>
        {children}
      </Container>

    </>

  )
}

export default Layout