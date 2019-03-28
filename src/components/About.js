import React from "react";
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"

import "./layout.css";

class About extends React.Component {

  render() {
      var { type } = this.props.aboutData
    return (
      <div>
          {type} COMPONENT
      </div>
    )
  }
}

export default About