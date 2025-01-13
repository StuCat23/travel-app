import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Places from './components/Places';
import Recent from './components/Recent';
import Aitinerary from './components/Aitinerary';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-site-pattern bg-cover bg-fixed">
        <Navbar />
        <Hero />
        <HomeCards />
        <Aitinerary />
        <Places />
        <Recent />
        <Footer />
      </div>
    </>
  )
}

export default App;