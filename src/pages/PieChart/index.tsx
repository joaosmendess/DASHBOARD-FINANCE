import React from 'react';
import { Container, SideLeft,LegendContainer,Legend, SideRight } from './style';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts'




const PieCharts: React.FC = () => (
  
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
            <Legend color='#F7931B'>
<div>5%</div>
<span>Entradas</span>
            </Legend>
            <Legend color='#E44C4E'>
<div>95%</div>
<span>Saídas</span>
            </Legend>  <Legend color='#F7931B'>
<div>5%</div>
<span>Entradas</span>
            </Legend>
            <Legend color='#E44C4E'>
<div>95%</div>
<span>Saídas</span>
            </Legend>  <Legend color='#F7931B'>
<div>5%</div>
<span>Entradas</span>
            </Legend>
            <Legend color='#E44C4E'>
<div>95%</div>
<span>Saídas</span>
            </Legend>  <Legend color='#F7931B'>
<div>5%</div>
<span>Entradas</span>
            </Legend>
            <Legend color='#E44C4E'>
<div>95%</div>
<span>Saídas</span>
            </Legend>
            </LegendContainer>
        </SideLeft>

        <SideRight>

        </SideRight>
    
    </Container>
  
);

export default PieCharts;
