import React from "react";
import "../styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      // social media icons here - font awesome maybe
      <footer>
        <div className="social-icons">
        <i class="fab fa-github-square fa-2x"></i>
        <i class="fab fa-linkedin fa-2x"></i>
        <i class="fab fa-twitter-square fa-2x"></i>
        <i class="fas fa-envelope-square fa-2x"></i>
        </div>
        <div className="built-by">
        <p>Built by Frank Harvey McManus</p><p>{"{ Gatsby.js, React.js, Javascript, GraphQL, Contentful, CSS }"}</p>
        </div>
      
      </footer>
    )
  }
}

export default Footer;