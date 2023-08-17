import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import './Home.css';
const Home = ({isDark}) => {
  return (
    <div>
        <Navbar />
        <Hero isDark={isDark}/>
    </div>
  )
}

export default Home