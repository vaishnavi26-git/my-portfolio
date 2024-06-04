import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi,My Name is <span style={{color:"#e9d35b"}}>Vaishnavi</span></h2>
        <div className="prompt">
          <p>A Software Developer with a passion of learning and creating.</p>

          <a href="https://www.linkedin.com/in/vaishnavi-kumari-4540aa112?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxVW7kRGRT2Cbw1K9P4CwXQ%3D%3D">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/vaishnavi26-git">
            <GitHubIcon />
          </a>
          {/* <a href="https://gmail.com">
            <EmailIcon />
          </a> */}
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJs,Redux,HTML,CSS ,NPM, BootStrap, MaterialUI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>{" "}
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
