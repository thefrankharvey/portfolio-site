import React from "react";
import "../styles/layout.css";

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