import React from "react";
import "../styles/index.css";

class Index extends React.Component {

  render() {
      var { type } = this.props.indexData
    return (
      <div className="index-container">
          {type} COMPONENT

      </div>
    )
  }
}

export default Index