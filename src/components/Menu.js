import React from "react"
import "../styles/menu.css"
import { Link } from "gatsby"
class Menu extends React.Component {

  handleClick() {
    let ul = document.getElementById("js-menu")
    ul.classList.toggle("active")
  }

  render() {
    return (
      <div className="nav">
        <div
          className="nav-toggle"
          onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </div>
        <nav className="navbar">
          <div className="logo"><Link to="/">Frank Harvey McManus</Link></div>
          <ul className="main-nav" id="js-menu">
            <li className="nav-links"><Link to="/about">About</Link></li>
            <li className="nav-links"><Link to="/portfolio">Portfolio</Link></li>
            <li className="nav-links"><Link to="/blog">Blog</Link></li>
            <li className="nav-links"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
