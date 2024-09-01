// src/components/TabNavigation.js
import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="tab-navigation">
      <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
      <button onClick={() => setActiveTab('settings')}>Settings</button>
    </div>
  );
}

export default TabNavigation;
