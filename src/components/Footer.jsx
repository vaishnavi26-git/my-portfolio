import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Footer.css"

function Footer() {
//   const d = new Date();
// let year = d.getFullYear();

  return (
    <div className='footer'>
      {/* <div className='socialMedia'><LinkedInIcon/>
      </div> */}
      <p> vaishnavisingh@gmail.com </p>
      <div className="links_footer">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>

    </div>
  )
}

export default Footer
