import React from 'react'
import './chart.scss';  
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'January', Total: 1200},
  { name: 'February', Total: 100},
  { name: 'March', Total: 2200},
  { name: 'April', Total: 1900},
  { name: 'May', Total: 1900},
  { name: 'April', Total: 1400},
  { name: 'June', Total: 900},
  { name: 'July', Total: 1500},
  { name: 'August', Total: 2000},
  { name: 'September', Total: 1900},
  { name: 'October', Total: 600},
  { name: 'November', Total: 1100},
  { name: 'December', Total: 1900}
];

export const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 6 months revenue</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
      <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
