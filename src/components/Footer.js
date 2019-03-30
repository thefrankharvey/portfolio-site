import React from "react";
import "../styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      // social media icons here - font awesome maybe
      <footer>
        <div className="social-icons">
        <a href="https://github.com/thefrankharvey" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square fa-2x"></i></a>

        <a href="https://linkedin.com/in/thefrankharvey" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>

        <a href="http://twitter.com/thefrankharvey" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter-square fa-2x"></i></a>

        <a href="mailto:frank@thefrankharvey.com?subject=You're hired, Frank!"><i class="fas fa-envelope-square fa-2x"></i></a>
        </div>

        <div className="built-by">
        <p><strong>{'\u00A9'}</strong>2019 Frank Harvey McManus</p><p><strong>{"{"}</strong> Built with Gatsby.js, React.js, Javascript, GraphQL, Contentful, CSS <strong>{"}"}</strong></p>
        </div>
      </footer>
    )
  }
}

export default Footer;