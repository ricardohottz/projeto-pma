import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from '../../styles/cardEmpresa.module.css'

export default class GraficoRecolhimento extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: 'MARÇO',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'ABRIL',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'MAIO',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '80%', justifyContent:'center' }}>
        <div className={style.graficoTitulo}>Recolhimento</div>
        <ResponsiveContainer width="100%" height={80} style={{justifyContent:'center', backgroundColor:'red'}}>
          <BarChart width={150} height={40} data={data} >
            <Bar dataKey="uv" onMouseOver={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#FF7A00' : '#C4C4C4'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className={style.graficoRodape}>{`${activeItem.name}: R$ ${activeItem.uv}`}</div>
      </div>
    );
  }
}
