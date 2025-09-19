import React from 'react'
import './hero.css'
import { Link } from 'react-scroll'
const hero = () => {

  const handleScroll = () => {
    const section = document.getElementById("programs"); // 👈 target section
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>Get scalable and secure solutions</h1>
          <p>High quality products in less time and lesser cost</p>
          <button className='btn'>
          <Link to="programs" smooth={true} offset={-260} duration={600}>
            Explore more
          </Link>
          </button>
        </div>
    </div>
  )
}

export default hero