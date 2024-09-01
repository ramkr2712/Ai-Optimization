// src/components/Settings.js
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import useSettings from '../hooks/useSettings';

function Settings() {
  const {
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
  } = useSettings();

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          AI Model Settings
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Productivity Threshold</Typography>
          <Slider
            value={threshold}
            onChange={(e, newValue) => setThreshold(newValue)}
            aria-labelledby="threshold-slider"
            step={1}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Model Type</Typography>
          <Select
            value={modelType}
            onChange={(e) => setModelType(e.target.value)}
            fullWidth
          >
            <MenuItem value="modelA">Model A</MenuItem>
            <MenuItem value="modelB">Model B</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Prediction Confidence Threshold</Typography>
          <Slider
            value={confidenceThreshold}
            onChange={(e, newValue) => setConfidenceThreshold(newValue)}
            aria-labelledby="confidence-slider"
            step={0.01}
            min={0}
            max={1}
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Data Filter</Typography>
          <TextField
            label="Category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            fullWidth
          />
          <TextField
            label="Date Range"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            fullWidth
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Update Frequency</Typography>
          <Select
            value={updateFrequency}
            onChange={(e) => setUpdateFrequency(e.target.value)}
            fullWidth
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Enable Advanced Features</Typography>
          <FormControlLabel
            control={<Checkbox checked={enableAdvancedFeatures} onChange={(e) => setEnableAdvancedFeatures(e.target.checked)} />}
            label="Enable Advanced Features"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Select Performance Metrics</Typography>
          <FormControlLabel
            control={<Checkbox checked={showAccuracy} onChange={(e) => setShowAccuracy(e.target.checked)} />}
            label="Accuracy"
          />
          <FormControlLabel
            control={<Checkbox checked={showPrecision} onChange={(e) => setShowPrecision(e.target.checked)} />}
            label="Precision"
          />
          <FormControlLabel
            control={<Checkbox checked={showRecall} onChange={(e) => setShowRecall(e.target.checked)} />}
            label="Recall"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography gutterBottom>Save User Preferences</Typography>
          <Button variant="contained" onClick={savePreferences}>
            Save Preferences
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Settings;
