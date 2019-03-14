import React from "react"
import "./card.css"
import ProjectButtons from "./ProjectButtons"


class Card extends React.Component {
// button factory here that take this.data or props.buttons
// makes button elements
// call this function where buttons are
  render() {
    return (
      <article className="card">
        <figure><span className="title">{this.props.stack}</span></figure>
        <div className="content">
        <div className="caption"><h4>winner of things</h4></div>
        <div className="summary">This app is awesome and I built it in ten minutes and now it's here for you to enjoy.</div>
        <div className="stack">Javascript | React | Node | GraphQL | Rails</div>
        <ProjectButtons />
        <div className="date will go here"></div>
        </div>
      </article>
    )
  }
}

export default Card

