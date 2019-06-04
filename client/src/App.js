import React from 'react';
import './App.css';
import Routers from './Containers/Routers'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'


function App() {
  // if user is logged in, show home, else landing page
  if(true) {
    return (
      <div className="App">
        <header className="App-header">
          <Routers />
        </header>
        <Home />
      </div>
    );
  } else {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }

}

export default App;
