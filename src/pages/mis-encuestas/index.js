import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import ItemEncuesta from '../../../components/misEncuestas/ItemEncuesta'
import { mostrarMisEncuesta } from '../../../utils/encuestaAPI'
import { usuarioIdLocal } from '../../../utils/localStorage'

const index = () => {

  const [encuesta, setEncuesta] = useState({data: [], carga: true})

  useEffect(() => {
    const listarEncuestas = async() => {

      const {data} = await mostrarMisEncuesta(usuarioIdLocal())
      if( encuesta.carga ) {
        setEncuesta({
          ...encuesta,
          data,
          carga: false
        })
      }
    }
    listarEncuestas()
  }, [ ])

  return (
    <Layout title='mis encuestas'>

      <Grid container spacing={4} sx={{justifyContent: 'space-evenly', mb:'32px'}} >

        { encuesta.data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ItemEncuesta encuesta={item}/>
          </Grid>
        ))}

      </Grid>

    </Layout>
  )
}



export default index