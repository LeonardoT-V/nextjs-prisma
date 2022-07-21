import React from 'react'
import { Pie } from '@ant-design/plots'

const GraficoPie = ({data}) => {

  const config = {
    appendPadding: 10,
    data,
    angleField: 'count',
    colorField: 'valor',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name}: {value} \n {percentage}',
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
    <Pie {...config} />
  )
}

export default GraficoPie