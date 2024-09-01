// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [threshold, setThreshold] = useState(60); // Default threshold

  return (
    <div className="app">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'dashboard' && <Dashboard threshold={threshold} />}
      {activeTab === 'settings' && <Settings threshold={threshold} setThreshold={setThreshold} />}
    </div>
  );
}

export default App;
