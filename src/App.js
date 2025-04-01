import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillsPage from './BillsPage';  // Correct import for BillsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BillsPage />} />  {/* Correct way to render BillsPage */}
      </Routes>
    </Router>
  );
}

export default App;