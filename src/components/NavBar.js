// src/components/NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar({ activeTab, setActiveTab }) {
  return (
    <Box sx={{ flexGrow: 1, fontSize: '1.2rem' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, font: '2.25 rem'}}>
            AI Product Dashboard
          </Typography>
          <Button color="inherit" onClick={() => setActiveTab('dashboard')}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => setActiveTab('settings')}>
            Settings
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
