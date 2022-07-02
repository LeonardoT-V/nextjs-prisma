import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout/Layout'

const index = () => {
  return (
    <Layout >
      <h1>Pagina de inicio</h1>
      <Link href='/crear-encuesta'>Crear encuesta</Link>
    </Layout>
  )
}

export default index