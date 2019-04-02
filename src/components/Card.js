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
    console.log(this.props.project.node.giphy)
    const {buttons, stack, summary, title, giphy} = this.props.project.node
    return (
      <article className="card">
        <figure>
        <iframe src={ giphy } width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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

