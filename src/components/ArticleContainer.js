import React from "react"
import "./articleContainer.css"
import Card from "./Card"
class ArticleContainer extends React.Component {

  render() {
    console.log(this.props.stack)
    return (
      <div className="article-container">
        <Card stack={this.props.stack}/>
        <Card />
        <Card />
      </div>
    )
  }
}

export default ArticleContainer
