import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Places from './components/Places';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Places />
    </>
  )
}

export default App;