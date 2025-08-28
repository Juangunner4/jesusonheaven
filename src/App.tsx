import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  React.useEffect(() => {
    // Use scalable SVG by default for crisper rendering and ensure
    // background is large enough across all sections. PNG remains in
    // the public directory as a fallback handled in CSS.
    document.documentElement.style.setProperty(
      '--background-heaven',
      "url('/backgroundheaven.svg')",
    );
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
