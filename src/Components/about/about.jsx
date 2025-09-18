import React from 'react'
import './about.css'
import about_img from '../../assets/about.jpg'

const about = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" />
        </div>
        <div className="about-right">
            <h3>ABOUT ME</h3>
            <h2>I am a Full Stack Web Developer</h2>
            <p>
                I am a MTech graduate in Computer Science and Engineering with a comprehensive foundation in
                programming and software development.
              </p>
            <p>
                Proficient in Node js, react js, python, data analysis, and full-stack
                development, with hands-on experience in machine learning, data engineering, and cybersecurity.
            </p>
            <p>
            Passionate about leveraging technology to solve complex problems and eager to contribute to
            innovative projects across various domains.
            </p>
        </div>
    </div>
  )
}

export default about