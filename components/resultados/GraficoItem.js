import React, { useEffect, useState } from 'react'
import { obtenerTodoResultado } from '../../utils/respuestaAPI'
import { Box, colors, Paper, Switch, Typography } from '@mui/material'
import GraficoPie from './GraficoPie'
import GraficoBarra from './GraficoBarra'

const GraficoItem = ({id, titulo}) => {

  const [resultado, setResultado] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [tipoGrafico, setTipoGrafico] = useState(true)

  useEffect(() => {
    const mostrarResultado = async() => {

      const data = await obtenerTodoResultado(id)
      if( actualizar ) {
        setResultado(data)
        setActualizar(false)
      }
    }
    mostrarResultado()
  }, [])



  return (
    <>
    <Paper sx={{mb:'32px'}} variant='outlined'>
      <Box display='flex' justifyContent='space-around' alignItems='center' sx={{backgroundColor:colors.cyan[100], p:'16px 32px'}}>
        <Typography variant='h5' sx={{color: colors.cyan[900]}}>{titulo}</Typography>
        <Paper elevation={4} sx={{p:'8px 32px', display:'flex', flexDirection:'column', alignItems:'center', gap:'5px', backgroundColor: colors.cyan[50]}} >
          <Typography variant='body1' sx={{color: colors.teal[900]}}>Tipo de grafico</Typography>
          <Box display='flex' alignItems='center'>
            <Typography variant='body2'>Circular</Typography>
            <Switch  onChange={() => setTipoGrafico(tipoGrafico ? false : true)}/>
            <Typography variant='body2'>Barra</Typography>
          </Box>
        </Paper>

      </Box>
      <Box sx={{p:'32px 20%', '@media(max-width:700px)':{p:'0'}}}>
        { tipoGrafico
          ? <GraficoPie data={resultado} />
          : <GraficoBarra data={resultado} />
        }
      </Box>
    </Paper>
    </>
  )
}

export default GraficoItem