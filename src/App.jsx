import React, { useRef } from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/hero/hero'
import Programs from './Components/programs/programs'
import Title from './Components/title/title'
import About from './Components/about/about'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import Experience from './Components/Experience/Experience'
const App = () => {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar onContactClick={scrollToContact}/>
      <Hero/>
      <div className="container">
        <Title subtitle='What I Offer' title='My Services'/>
        <Programs/>
        <Experience/>
        <About/>
        <Title subtitle='Contact Me' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App