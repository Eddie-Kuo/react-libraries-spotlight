import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';


export default function DataChart() {

  const data = [
    {
      fruit: 'oranges',
      quantity: 5,
    },
    {
      fruit: 'apples',
      quantity: 8,
    },
    {
      fruit: 'mangos',
      quantity: 6,
    }
  ];

  return (
    <VictoryChart>
      <VictoryAxis>

      </VictoryAxis>
      <VictoryBar 
        data={data} 
        x="fruit" 
        y="quantity" />
    </VictoryChart>
  );
}





