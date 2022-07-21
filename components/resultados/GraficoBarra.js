import React from 'react'
import { Column } from '@ant-design/plots'


const GraficoBarra = ({data}) => {

  const config = {
    data,
    xField: 'valor',
    yField: 'count',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      valor: {
        alias: 'valores',
      },
      count: {
        alias: 'respuesta',
      },
    },
  };

  return (
    <Column {...config} />
  )
}

export default GraficoBarra