import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--background-heaven', 'url(/backgroundheaven.png)');
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
