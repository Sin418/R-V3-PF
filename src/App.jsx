import React, { useState } from 'react';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading setLoading={setLoading} />;
  }

  return (
    <div className="app-container">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
