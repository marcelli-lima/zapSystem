import React from 'react';
import { Bar } from 'react-chartjs-2';
import PrimeiroGrafico from '../../componentes/Graficos/Grafico1';
import SegundoGrafico from '../../componentes/Graficos/Grafico2';


const Home = () => (
    <div className='header'>
      <PrimeiroGrafico/>
      <hr/>
      <SegundoGrafico/>
      </div>
);

export default Home