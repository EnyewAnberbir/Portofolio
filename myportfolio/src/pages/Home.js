import React from 'react';
import {Link} from "react-router-dom";
import "../styles/home.css"
import mypic from "../assets/mypic.jpg";
function Home() {
  return (
    <div className="container">
      <div className="sidebar">
        <nav>
        <Link to="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/skills">Skills</Link>
        <Link to ="/Resume">Resume</Link>
        </nav>
      </div>
      <div className="content">
        <img src={mypic} alt="My Picture" />
        <div className="note">
          <h1>Enyew Anberbir</h1>
          <p>I am Software Engineer and create features that are best suited for the job at hand</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
