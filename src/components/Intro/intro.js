import React from "react";
import "./intro.css";
import bg from "../../assets/hung_avt.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName">
            Trung Hung <br />
            Software Developer
          </span>
        </span>
        <p className="introPara">
          I am a fullstack dev with experience accumulated from Personal and
          Team projects{" "}
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire ME" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
