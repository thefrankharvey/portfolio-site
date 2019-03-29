import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

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