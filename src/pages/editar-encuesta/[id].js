import { Send } from '@mui/icons-material';
import { Grid, Paper, Typography, Divider, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import FormularioEnc from '../../../components/editar/FormularioEnc';
import PreguntaList from '../../../components/editar/PreguntaList';
import Layout from '../../../components/layout/Layout'
import { publicarUnaEncuesta } from '../../../utils/encuestaAPI';
import { mostrarPreguntas } from '../../../utils/preguntaAPI'

const index = ({data, id}) => {
  const [encuesta, setEncuesta] = useState(data)
  const router = useRouter()
  const publicarEncuesta = async() => {
  	await publicarUnaEncuesta(id)
    router.push('/mis-encuestas')
  }

  return (
    <Layout>

      <Grid container spacing={4} sx={{mb:'32px'}} >
        <Grid item xs={12} sm={7} position='sticky'>
          <Paper sx={{p:'16px'}} >
            <FormularioEnc formId={id} setEncuesta={setEncuesta}/>
            <Button onClick={publicarEncuesta} variant='contained' size='large' sx={{m:'12px auto auto auto', display:'flex'}} endIcon={<Send />}>Publicar encuestas</Button>
          </Paper>

        </Grid>

        <Grid item xs={12} sm={5} >
          <Paper sx={{p:'16px'}}>
            { encuesta.length === 0
              ?<Typography>Ingrese preguntas en el panel izquierdo</Typography>
              :<>
                <PreguntaList encuesta={encuesta} formId={id} setEncuesta={setEncuesta}/>
                <Divider sx={{width:'70%', m:'auto'}}  />
              </>
            }
          </Paper>
        </Grid>
      </Grid>

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