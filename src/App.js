// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BillsPage from './ComingSoon'; // Import the updated BillsPage (which used to be ComingSoon)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BillsPage} /> {/* This will now render the bills tracking page */}
      </Switch>
    </Router>
  );
}

export default App;