import React, { useState } from 'react'
import { todasLasEncuesta } from '../../../utils/encuestaAPI'
import Layout from '../../../components/layout/Layout'
import { Grid } from '@mui/material'
import ItemComunidad from '../../../components/comunidad/ItemComunidad'

const index = ({data}) => {

  const [encuesta, setEncuesta] = useState(data)
  console.log(encuesta);
  return (
    <Layout title='Encuesta de la comunidad'>

      <Grid container spacing={4} sx={{justifyContent: 'space-evenly', mb:'32px'}}>

        { encuesta.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ItemComunidad encuesta={item} />
          </Grid>
        ))}

      </Grid>

    </Layout>
  )
}


export async function getServerSideProps() {

  const {data} = await todasLasEncuesta()

  return { props: { data } }
}

export default index