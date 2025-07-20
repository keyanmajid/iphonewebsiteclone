import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Highlights from './Components/Highlights.jsx';
import Features from './Components/Features.jsx';
import Footer from './Components/Footer.jsx';
const App = () => {
  return (
<main className='bg-black text-white'>
    <Navbar />
    <Hero />
    <Highlights />
    <Features />

      <Footer />
   
</main>
  )
}

export default App;
