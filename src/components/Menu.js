import React from "react"
import "./menu.css"
// import { Link } from "gatsby"
class Menu extends React.Component {
  handleClick() {
    let ul = document.getElementById("js-menu")
    ul.classList.toggle("active")
  }

  render() {
    return (
      <div className="nav">
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          ref="hamburger"
          onClick={this.handleClick}>
          <i className="fas fa-bars" />
        </span>
        <nav className="navbar">
          <div className="logo">Frank Harvey McManus</div>
          <ul className="main-nav" id="js-menu">
            <li className="nav-links">About</li>
            <li className="nav-links">Portfolio</li>
            <li className="nav-links">Blog</li>
            <li className="nav-links">Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
