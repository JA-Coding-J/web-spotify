import React from 'react';
import './App.css';
import { routes } from './router/config';
import Router from './router/Router';

function App() {
  return (
    <div className="App varient">
      <Router routes={routes} />
    </div>
  );
}

export default App;
