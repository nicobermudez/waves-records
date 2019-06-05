import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'


function App() {
  // if user is logged in, show home, else landing page
  if(false) {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
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
