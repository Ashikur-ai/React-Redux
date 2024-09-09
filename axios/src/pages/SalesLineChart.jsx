import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const salesData = [
  { month: 'Jan', productA: 4000, productB: 2400, productC: 2400 },
  { month: 'Feb', productA: 3000, productB: 1398, productC: 2210 },
  { month: 'Mar', productA: 2000, productB: 9800, productC: 2290 },
  { month: 'Apr', productA: 2780, productB: 3908, productC: 2000 },
  { month: 'May', productA: 1890, productB: 4800, productC: 2181 },
  { month: 'Jun', productA: 2390, productB: 3800, productC: 2500 },
  { month: 'Jul', productA: 3490, productB: 4300, productC: 2100 }
];
const SalesLineChart = () => {
  return (
    <div>


      This is LineChart
      <ResponsiveContainer
        width={500} height={300} data={salesData}
      >
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="productA" stroke="#8884d"/>

          <Line type="monotone" dataKey="productB" stroke="#82ca9d" />
          <Line
            type="monotone"
            dataKey="productC"
            stroke="#ffc658"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;