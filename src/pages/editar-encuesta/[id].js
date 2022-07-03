import { Grow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import { mostrarPreguntas } from '../../../utils/preguntaAPI'

const index = ({data}) => {
  const [pregunta, setPregunta] = useState(data)
  console.log(data);
  return (
    <Layout>


      <Box>
        {pregunta.map(({id, titulo, opcion}) => (
          <Grow in={true} key={id}>
            <Typography>{titulo}</Typography>
          </Grow>
        ))}
      </Box>



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

  return { props: { data } }
}

export default index