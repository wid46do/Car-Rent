import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../style/pie.css';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {

  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
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