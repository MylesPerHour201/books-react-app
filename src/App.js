import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/hero/Hero.js';
import Books from './components/Books/Books.js';
import Paper from './components/Paper/Paper.js';
import Why from './components/Why/Why.js';
import Resources from './components/Resources/Resources.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Books />
      <Paper />
      <Why />
      <Resources />

    </div>
  );
}

export default App;
