import React from "react"
import "../styles/card.css"

class Card extends React.Component {
  
makeButtons(buttons) {
const buttonList = buttons.map((butt) => {
  return <a className="btn" href={butt.link} target="_blank" rel="noopener noreferrer">{butt.title}</a>
})

return buttonList
}

  render() {
    const {buttons, stack, summary, title} = this.props.project.node

    return (
      <article className="card">
        <figure>
        <img alt="thumbnail" src={this.props.project.node.thumbnailImage.file.url}></img>
        </figure>
        <div className="content">
        <div className="caption"><h4>{title}</h4></div>
        <div className="summary">{summary}</div>
        
        <div className="date will go here"></div>
        </div>
        <div className="btn-container">
        {this.makeButtons(buttons)}
        </div>
      </article>
    )
  }
}

export default Card

