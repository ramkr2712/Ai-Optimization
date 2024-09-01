// src/hooks/useSettings.js
import { useState } from 'react';

export default function useSettings() {
  // State variables
  const [threshold, setThreshold] = useState(50);
  const [modelType, setModelType] = useState('modelA');
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.5);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [updateFrequency, setUpdateFrequency] = useState('daily');
  const [enableAdvancedFeatures, setEnableAdvancedFeatures] = useState(false);
  const [showAccuracy, setShowAccuracy] = useState(true);
  const [showPrecision, setShowPrecision] = useState(true);
  const [showRecall, setShowRecall] = useState(true);

  // Function to save preferences
  const savePreferences = () => {
    // Implement logic to save preferences, e.g., localStorage, API call, etc.
    console.log({
      threshold,
      modelType,
      confidenceThreshold,
      filterCategory,
      filterDate,
      updateFrequency,
      enableAdvancedFeatures,
      showAccuracy,
      showPrecision,
      showRecall,
    });
  };

  return {
    threshold,
    setThreshold,
    modelType,
    setModelType,
    confidenceThreshold,
    setConfidenceThreshold,
    filterCategory,
    setFilterCategory,
    filterDate,
    setFilterDate,
    updateFrequency,
    setUpdateFrequency,
    enableAdvancedFeatures,
    setEnableAdvancedFeatures,
    showAccuracy,
    setShowAccuracy,
    showPrecision,
    setShowPrecision,
    showRecall,
    setShowRecall,
    savePreferences,
  };
}
