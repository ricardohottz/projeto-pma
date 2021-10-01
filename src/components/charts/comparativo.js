import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '2016',
    IPTU: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2017',
    IPTU: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2018',
    IPTU: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2019',
    IPTU: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2020',
    IPTU: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2021',
    IPTU: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2022',
    IPTU: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class GraficosISS extends PureComponent {
    // https://recharts.org/en-US/examples/LineChartWithReferenceLines

  render() {
    return (
      <div style={{backgroundColor:'#ffff', width:'900px', borderRadius:'3px', boxShadow:'0px 1px 3px  gray', marginLeft:'45px'}}>
        <div style={{padding:'20px'}}>Gráfico comparativo</div>
        <LineChart
          backgro
          width={900}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
         
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="IPTU" stroke="#82ca9d" />
        </LineChart>
      </div>
      
    );
  }
}
