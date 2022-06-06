import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../style/pie.css';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {

  labels: ['Ferrari', 'BMW'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



export function PieChart(chartData) {
  console.log(chartData);
  return (
    <div className=''>
      <div className='mt-5 mb-4'>
        <h1 className='font-weight-bold text-center mb-3 mx-3 mx-md-3 mx-lg-0'>Produk Terlaris</h1>
      </div>
      <div className="pie">
        <Pie 
          data={chartData.chartData}
          width={100}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "car"
              },
              legend: {
                display: true,
                position: "bottom"
              }
            }
          }}
        />
      </div>
    </div>
  ) 
}