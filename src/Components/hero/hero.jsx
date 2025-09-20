import React from "react";
import "./hero.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero container">
      {/* Left side */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-name">Thejas S</h1>
        <p className="hero-role">Software Engineer</p>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Get scalable and secure solutions</h1>
        <p>High quality products in less time and lesser cost</p>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="programs" smooth={true} offset={-260} duration={600}>
            Explore more
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
