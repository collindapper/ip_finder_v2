import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Custom imports
import Navbar from './navbar/navbar';
import Home from './home/home';
import MatrixBackground from './matrixBackground';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Navbar>
      <MatrixBackground />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Navbar>
  );
}

export default App;
