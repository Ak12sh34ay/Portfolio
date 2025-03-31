import React from "react";
import "./About.css";
import themepattern from "../../assets/theme_pattern.svg";
import profileimage from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-tittle">
        <h1>About Me</h1>
        <img src={themepattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileimage} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate and driven Computer Science graduate currently
              pursuing an MCA with a specialization in AI
            </p>
            <p>
              With a strong foundation in full-stack development and AI-powered
              solutions, I have worked on projects like a Breast Cancer
              Detection System using Python and Flask, as well as MallSavvy, a
              MERN-stack application for mall-based services. I thrive on
              solving complex problems and building innovative solutions that
              enhance user experience and efficiency.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML $ CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>6 month</h1>
          <p>Course completed in MEAN Stack</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>3+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>2 Year</h1>
          <p>
            {/* Elected as Chairman of my College Union, demonstrating leadership */}
            {/* and organizational skills. */}
            Created high skills project works
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
