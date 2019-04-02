import React from "react";
import "../styles/about.css";

class About extends React.Component {

  render() {
    var url = this.props.pdf
    return (
        <div className="about-grid">
        <div className="mission">
        <p className="headline">Bio</p><p className="bio-body">I am a lifelong artist turned software engineer. Over 15 years towards mastering tattooing and building my own business, I became internationally published, award-winning, and televised. Compelled to do more, I traded in my brushes and canvas for keys and pixels. At heart I am simply a creator and craftsman, mastering my tools through making things - with art and code. </p>
        </div>
        <div className="about-photo"></div>
        <div className="bio"><p className="headline">Mission</p><p className="interests-body">As a software engineer I dedicate the same passion and grit I had for art to coding. I have mountains to learn and I am ecstatic climb them during what I believe is our generation’s equivalent of the industrial revolution. I see software as another way to make things with different set of tools - a challenge I deeply needed.  What fulfills me is building important things for the world with an inspired team with which I can grow and help grow.</p></div>
        <div className="interests"><p className="headline">Interests</p><p className="interests-body">When not dissecting the philosophical amplifications of art and tech, you’ll find me studying augmented reality, computer vision, AWS, Javascript, and computer science concepts. I plan to be a lifelong student and participate more deeply in the tech community. I love all things art and craft. Engineering has made me a better artist. Art has made me a better engineer. </p></div>
        
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