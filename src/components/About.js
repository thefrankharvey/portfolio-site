import React from "react";
import "../styles/about.css";

class About extends React.Component {

  render() {
    var url = this.props.pdf
    return (
        <div className="about-grid">
        <div className="mission">
        <p className="headline">Bio</p><p className="bio-body">I am a lifelong artist turned software engineer. Over a 15 year career, I built my own business and my tattoo work was internationally published, award-winning, and televised. During a long period of feeling unchallenged, I felt magnetized to code and fell completely in love with the craft. At heart, I am a creator and craftsman, and code is now my tool. </p>
        </div>
        <div className="about-photo"></div>
        <div className="bio"><p className="headline">Mission</p><p className="interests-body">As a software engineer I dedicate the same passion and grit to coding that drove my success in art. I have mountains to learn and I am thrilled to climb them during what I believe is our generation’s equivalent of the industrial revolution. Lines are being blurred between tech and art and sociology and communication. Tech is transforming human culture as a whole which in turn will effect everything around us. Contributing to this evolution in an authentic and significant way is what fulfills me.</p></div>
        <div className="interests"><p className="headline">Interests</p><p className="interests-body">When not reading or dissecting the philosophical amplifications of art and tech, you’ll find me studying augmented reality, computer vision, Javascript, and computer science concepts. I plan to be a lifelong student, continue competing in hackathons, learning new things and participating more deeply in the tech community. Engineering has made me a better artist. Art has made me a better engineer. </p></div>
        
        <div className="blurb-box">
        
        <div className="blurb">
        <p>Frank Harvey McManus is an NYC based Software Engineer. Click for resume.</p>
        </div>
        
        <div className="blurb-icon">
          <a href={ url } target="_blank" rel="noopener noreferrer"><i class="fas fa-file-invoice fa-2x"></i></a>
          </div>

        </div>
        </div>

    )
  }
}

export default About