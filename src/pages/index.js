import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
class Index extends React.Component {
  render() {
    return (
      <div> 
        <Layout index={this.props.data.allContentfulIndex.edges} />
      </div>
    )
  }
}

export default Index;

export const query = graphql`
  query {
    allContentfulIndex {
      edges {
        node {
          type
        }
      }
     }
    }
`

