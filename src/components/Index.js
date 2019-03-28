import React from "react";
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"

import "./layout.css";

class Index extends React.Component {

  render() {
      var { type } = this.props.indexData
    return (
      <div>
          {type} COMPONENT
      </div>
    )
  }
}

export default Index