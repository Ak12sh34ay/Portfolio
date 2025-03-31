import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profileimg} alt="" />
      <h1>
        <span>I'm Akshay, </span>Software Developer
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
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
