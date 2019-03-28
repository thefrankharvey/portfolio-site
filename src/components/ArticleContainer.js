import React from "react"
import "./articleContainer.css"
import Card from "./Card"
class ArticleContainer extends React.Component {
// send all props to articlecontainer and articlecontainer decides which to render
sendWhichProps(props) {
  switch(Object.keys(props.content)[0]) {
    case 'projects':
      // return <ArticleContainer projects={this.props.projects}/>;
      return 'projects'
    case 'posts':
      return 'these are posts';
    case 'index':
      return 'these are index';
    case 'contact':
      return 'these are contact';
    case 'about':
      return 'these are about';
    // case 'error':
    //   return <Error text={text} />;
    default:
      return 'not working yet';
  }
}

  render() {
    return (
      <div className="article-container">
      {this.sendWhichProps(this.props)}
        {/* {this.props.content.map(project => <Card project={project} />)} */}
      </div>
    )
  }
}

export default ArticleContainer
