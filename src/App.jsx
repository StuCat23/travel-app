import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Places from './components/Places';
import Recent from './components/Recent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Places />
      <Recent />
      <Footer />
    </>
  )
}

export default App;