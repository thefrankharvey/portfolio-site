import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

class Portfolio extends React.Component {
  
  render() {
    return (
      <div> 
        <Layout projects={this.props.data.allContentfulProject.edges} />
      </div>
    )
  }
}

export default Portfolio;

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          type
        title
         summary
         stack
         buttons {
           icon
           link
           title
         }
         giphy
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