import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BillsPage from './Billspage'; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BillsPage />} /> {/* Correct way to render BillsPage */}
      </Routes>
    </Router>
  );
}

export default App;