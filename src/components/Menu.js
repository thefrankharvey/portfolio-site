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
          <div className="logo"><Link to="/" activeClassName="nav-active"> Frank Harvey McManus</Link><span>Artist {'\u2715'} Engineer</span></div>
          <ul className="main-nav" id="js-menu">
            <li className="nav-links"><Link to="/about" activeClassName="nav-active">About</Link></li>
            <li className="nav-links"><Link to="/portfolio" activeClassName="nav-active">Portfolio</Link></li>
            {/* <li className="nav-links"><Link to="/blog" activeClassName="nav-active">Blog</Link></li> */}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu