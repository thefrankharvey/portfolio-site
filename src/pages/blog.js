import React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"


class Blog extends React.Component {
 
  render() {
    return (
      <div> 
          <Layout posts={this.props.data.allContentfulBlogPost.edges}/>
      </div>
    )
  }
}

export default Blog;

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
        title
         summary
         buttons {
           icon
           link
           title
         }
         thumbnailImage {
          file {
            url
          }
        }
        }
      }
     }
    }
`