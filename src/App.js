import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './ComingSoon'; // Correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} /> {/* Correct way to render ComingSoon */}
      </Routes>
    </Router>
  );
}

export default App;