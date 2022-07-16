import React, { useEffect, useState } from 'react'
import { obtenerTodoResultado } from '../../utils/respuestaAPI'
import { Pie } from '@ant-design/plots'
import { Paper, Typography } from '@mui/material'

const GraficoItem = ({id, titulo}) => {

  const [resultado, setResultado] = useState([])
  const [actualizar, setActualizar] = useState(true)


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

  const config = {
    appendPadding: 10,
    data:resultado,
    angleField: 'count',
    colorField: 'valor',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
      {
        type: 'element-selected',
      },
    ],
  };


  return (
    <>
    <Paper sx={{p:'32px 20%', mb:'32px'}} variant='outlined'>
      <Typography variant='h5'>{titulo}</Typography>
      <Pie {...config} />
    </Paper>
    </>
  )
}

export default GraficoItem