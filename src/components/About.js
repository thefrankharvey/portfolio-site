import React from "react";
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