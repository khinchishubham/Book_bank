import React from 'react'
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import Freebooks from '../components/Freebooks';
import Footer from '../components/footer';
function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebooks />
      <Footer/>
    </div>
  );
}

export default Home
