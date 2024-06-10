import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ParentComponent from './components/ParentComponent';
import SelectionPage from './components/SelectionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/selection-page" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
