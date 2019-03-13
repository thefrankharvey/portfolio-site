import React from "react"

import "./articleContainer.css"
import ProjectCard from "./ProjectCard"
class ArticleContainer extends React.Component {
  render() {
    return (
      <div className="article-container">
      <ProjectCard />
      </div>
    )
  }
}

export default ArticleContainer;