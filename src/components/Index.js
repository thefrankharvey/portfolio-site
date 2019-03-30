import React from "react";
import "../styles/index.css";

class Index extends React.Component {

  render() {
      var { type } = this.props.indexData
    return (
      <div className="index-photo"></div>
    )
  }
}

export default Index