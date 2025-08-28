import React from 'react';
import './App.css';
import Home from './pages/Home';
import backgroundHeaven from './assets/backgroundheaven.svg';

function App() {
  return (
    <div 
      className="App"
      style={{
        backgroundImage: `url(${backgroundHeaven})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      <Home />
    </div>
  );
}

export default App;
