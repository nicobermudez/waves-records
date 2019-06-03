import React from 'react';
import './App.css';
import Routers from './Containers/Routers'
import Home from './Containers/Home'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routers />
      </header>
      <Home />
    </div>
  );
}

export default App;
