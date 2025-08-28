import React from 'react';
import './App.css';
import Home from './pages/Home';
import backgroundHeaven from './assets/backgroundheaven.svg';

function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--background-heaven', `url(${backgroundHeaven})`);
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
