import React from "react";
import "../styles/about.css";

class About extends React.Component {

  render() {
      var { type } = this.props.aboutData
    return (
        <div className="about-grid">
        <div className="mission">
        <p>Mission Statement</p><p>Lorem Ipsum</p>
        </div>
        <div className="about-photo">Photo</div>
        <div className="bio"><p>Bio</p><p>Lorem Ipsum</p></div>
        <div className="interests"><p>Interests</p><p>Lorem Ipsum</p></div>
        <div className="blurb"><p>Blurb</p><p>download resume here</p></div>
        
        </div>

    )
  }
}

export default About