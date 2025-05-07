import React from "react";
import "./Hero.css";
import profileimg from "../../assets/front_logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/Akshay_Resume_Developer.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileimg} alt="Rotating" className="rotating-image" />
      <h1>
        <span>I am Akshay, </span>Software Developer
      </h1>
      <p>
        Computer Science graduate pursuing an MCA in AI, skilled in full-stack
        development and AI solutions. Passionate about problem-solving and
        innovation
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>

        {/* Updated Resume Link */}
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
