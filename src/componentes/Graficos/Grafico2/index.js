import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  datasets: [
    {
      label: '# Quantidade de transações PIX',
      data: [1650, 13000, 3800, 1700, 3700, 6100, 1650, 13000, 3880, 5800, 2200, 3800, 1780, 13000, 3900, 7800, 8100, 4400, 8150, 2150],
      fill: false,
      backgroundColor: '#c9184a',
      borderColor: '#ff758f',
    },
  ],
};


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const SegundoGrafico = () => (
  <>
    <div className='header'>
      <div className='links'>

      </div>
    </div>
    <Line data={data}
       width={500}
      height={100}
      options={options} />
  </>
);

export default SegundoGrafico;