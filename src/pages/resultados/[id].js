import React, { useState } from 'react'
import {mostrarPreguntas} from '../../../utils/preguntaAPI'
import Layout from '../../../components/layout/Layout'
import GraficoItem from '../../../components/resultados/GraficoItem'

const index = ({data}) => {
  const [pregunta, setPregunta] = useState(data)
  return (
    <Layout>
      {pregunta.map((item) => (
        <GraficoItem id={item.id} titulo={item.titulo} />
      ))}
    </Layout>
  )
}


export async function getServerSideProps({params}) {
  const { id } = params
  const {data} = await mostrarPreguntas(id)
  if(data.error) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return { props: { data, id } }
}

export default index