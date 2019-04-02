import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import "../styles/layout.css";
import ArticleContainer from "./ArticleContainer";

class Layout extends React.Component {

  render() {
    return (
      <div className='app'>
      <Menu />
      hey
      <ArticleContainer content={this.props}/>
      <Footer/>
      </div>
    )
  }
}

export default Layout



