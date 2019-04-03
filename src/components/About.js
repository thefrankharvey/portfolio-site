import React from "react";
import "../styles/about.css";

class About extends React.Component {

  render() {
    var url = this.props.pdf
    return (
        <div className="about-grid">
        <div className="mission">
        <p className="headline">Bio</p><p className="bio-body">I am a lifelong artist turned software engineer. Over a 15 year tattoo career, I built my own business; My work was internationally published, award-winning, and televised. After feeling a bit too comfortable I felt compelled to do more so, I learned to code. At heart, I am simply a creator and craftsman, mastering my tools through making things - with art and code. </p>
        </div>
        <div className="about-photo"></div>
        <div className="bio"><p className="headline">Mission</p><p className="interests-body">As a software engineer I dedicate the same passion and grit to coding that drove my success in art. I have mountains to learn and I am thrilled to climb them during what I believe is our generation’s equivalent of the industrial revolution. I see software as another way to make things, just with different set of tools - a challenge I deeply needed.  What fulfills me is building important things for the world with an inspired team with which I can grow and add value.</p></div>
        <div className="interests"><p className="headline">Interests</p><p className="interests-body">When not dissecting the philosophical amplifications of art and tech, you’ll find me studying augmented reality, computer vision, Javascript, and computer science concepts. I plan to be a lifelong student, continue competing in hackathons and participate more deeply in the tech community. I love all things tech and craft. Engineering has made me a better artist. Art has made me a better engineer. </p></div>
        
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