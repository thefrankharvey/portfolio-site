import React from "react"
import "./layout.css"

class Contact extends React.Component {
  render() {
    var { type } = this.props.contactData
    return <div>{type} COMPONENT</div>
  }
}

export default Contact
