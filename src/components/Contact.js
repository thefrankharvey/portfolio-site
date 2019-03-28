import React from "react";
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"

import "./layout.css";

class Contact extends React.Component {

  render() {
      var { type } = this.props.contactData
    return (
      <div>
          {type} COMPONENT
      </div>
    )
  }
}

export default Contact