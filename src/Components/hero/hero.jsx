import React from 'react'
import './hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-left">
        <h1 className="hero-name">Thejas S</h1>
        <p className="hero-role">Software Engineer</p>
      </div>

      <div className="hero-right">
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

export default Hero
