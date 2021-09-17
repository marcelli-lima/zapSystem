import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Zapelino', 'OI', 'BRB', 'BRB Nação'],
  datasets: [
    {
      label: '# Quantidade de contas abertas',
      data: [2400, 1350, 520, 1000],
      backgroundColor: [
        '#ef476f',
        '#ffd166',
        '#06d6a0',
        '#118ab2',
      ],
      borderColor: [
        '#7e0756',
        '#a2a50a',
        '#0e5a05',
        '#110558',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {

  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
   
  },
};

const PrimeiroGrafico = () => (
  <>
    <div className='header'>
      <h1 className='title'>Contas Abertas - BOT</h1>
      <div className='links'>

      </div>
    </div>

    <Bar data={data}
      width={500}
      height={100}
      options={options} />
  </>
);

export default PrimeiroGrafico