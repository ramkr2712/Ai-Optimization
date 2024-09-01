// src/components/AIOptimizedProductChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import useAIOptimization from '../hooks/useAIOptimization';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function AIOptimizedProductChart({ products, threshold }) {
  const optimizedProducts = useAIOptimization(products, threshold);

  const data = {
    labels: optimizedProducts.map((product) => product.name),
    datasets: [
      {
        label: 'Product Popularity',
        data: optimizedProducts.map((product) => product.popularity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="product-chart">
      <h2>AI Optimized Product Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default AIOptimizedProductChart;
