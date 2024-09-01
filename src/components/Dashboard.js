// src/components/Dashboard.js
import React from 'react';
import ProductList from './ProductList';
import AIOptimizedProductChart from './AIOptimizedProductChart';
import products from '../data/products';
import Box from '@mui/material/Box';

function Dashboard({ threshold }) {
  return (
    <Box sx={{ p: 6 }}>
      <ProductList products={products} threshold={threshold} />
      <AIOptimizedProductChart products={products} threshold={threshold} />
    </Box>
  );
}

export default Dashboard;
