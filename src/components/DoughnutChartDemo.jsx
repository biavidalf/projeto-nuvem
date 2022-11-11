import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Entregues', 'Pendentes'],
  datasets: [
    {
      label: 'Entregas',
      data: [22, 8],
      backgroundColor: [
        '#23459C',
        '#FEAD00',
      ]
    },
  ],
};

export const options = {
  plugins: {
    legend:   {
      labels: {
        // This more specific font property overrides the global property
        font: {
            size: 10
        },
      },
      position: 'bottom'
    }
  }
}

export function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
