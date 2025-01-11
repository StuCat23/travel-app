import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Places from './components/Places';
import Recent from './components/Recent';
import Aitinerary from './components/Aitinerary';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <HomeCards />
        <Aitinerary />
        <Places />
        <Recent />
        <SignUp />
        <Footer />
    </>
  )
}

export default App;