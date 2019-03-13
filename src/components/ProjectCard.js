import React from "react"
import "./projectCard.css"
class ProjectCard extends React.Component {
  render() {
    return (
      <article className="card">
        <figure><span className="title">Title</span></figure>
        <div className="content">
        <div className="caption"><h4>winner of things</h4></div>
        <div className="summary">This app is awesome and I built it in ten minutes and now it's here for you to enjoy.</div>
        <div className="stack">Javascript | React | Node | GraphQL | Rails</div>
        <button>Use it</button>
        </div>
      </article>
    )
  }
}

export default ProjectCard
