import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const salesData = [
  { month: 'Jan', productA: 4000, productB: 2400, productC: 2400 },
  { month: 'Feb', productA: 3000, productB: 1398, productC: 2210 },
  { month: 'Mar', productA: 2000, productB: 9800, productC: 2290 },
  { month: 'Apr', productA: 2780, productB: 3908, productC: 2000 },
  { month: 'May', productA: 1890, productB: 4800, productC: 2181 },
  { month: 'Jun', productA: 2390, productB: 3800, productC: 2500 },
  { month: 'Jul', productA: 3490, productB: 4300, productC: 2100 }
];
const SalesBarChart = () => {
  return (
    <div>
      <p>This is Bar Chart</p>
      <ResponsiveContainer width={700} height={350}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="month" />
          <YAxis />
          <Legend/>

          <Bar
            dataKey="productA"
            fill="#8884d8"
          />

          <Bar
            dataKey="productB"
            fill='#82ca9d'
          />

          <Bar
            dataKey="productC"
            fill='#ffc658'
          />
        </BarChart>

      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarChart;