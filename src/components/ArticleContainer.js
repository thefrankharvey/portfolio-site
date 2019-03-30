import React from "react"
import "../styles/articleContainer.css"
import Card from "./Card"
import Index from "./Index"
import About from "./About"
class ArticleContainer extends React.Component {
  // send all props to articlecontainer and articlecontainer decides which to render
  sendWhichProps(props) {
    switch (Object.keys(props.content)[0]) {
      case "projects":
        return (
          <div className="article-container">
            {this.props.content.projects.map(project => (<Card project={project} />))}
          </div>
        )
      case "posts":
        return (
          <div className="article-container">
            {this.props.content.posts.map(project => (<Card project={project} />))}
          </div>
          )
      case "index":
        return (
          <div className="index-container"><Index indexData={this.props.content.index[0].node} /></div>
        )
      case "about":
        return (
          <div className="about-container"><About aboutData={this.props.content.about[0].node} /></div>
        )
      default:
        return "Nothing here. Please use the menu to navigate."
    }
  }

  render() {
    return <div>{this.sendWhichProps(this.props)}</div>
  }
}

export default ArticleContainer
