import React from "react";
import "./articleContainer.css";
import Card from "./Card";
import Index from "./Index";
import Contact from "./Contact";
import About from "./About";
class ArticleContainer extends React.Component {
// send all props to articlecontainer and articlecontainer decides which to render
sendWhichProps(props) {
  console.log(props)
  switch(Object.keys(props.content)[0]) {
    case 'projects':
    return  (
      <div className="article-container">
        {this.props.content.projects.map(project => <Card project={project} />)}
      </div>
    );
    case 'posts':
    return  (
      <div className="article-container">
        {this.props.content.posts.map(project => <Card project={project} />)}
      </div>
    );
    case 'index':
      return <div className="article-container">
      <Index indexData={this.props.content.index[0].node}/>
    </div>
    case 'contact':
    return <div className="article-container">
    <Contact contactData={this.props.content.contact[0].node}/>
  </div>
    case 'about':
    return <div className="article-container">
    <About aboutData={this.props.content.about[0].node}/>
  </div>
    default:
      return 'not working yet';
  }
}

  render() {
    return (
      <div>
        {this.sendWhichProps(this.props)}
      </div>
    )
  }
}

export default ArticleContainer
