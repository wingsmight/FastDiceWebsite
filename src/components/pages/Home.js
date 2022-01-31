import React from 'react';
import '../../App.css';
import AppInfoSection from './AppInfoSection';
import Footer from './Footer';
import { fastDice, audioDefender } from './Data';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <AppInfoSection {...fastDice} />
      <AppInfoSection {...audioDefender} />
      <Footer />
    </>
  );
}

export default Home;
