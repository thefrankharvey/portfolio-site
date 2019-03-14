/* eslint-disable */
import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"


class Portfolio extends React.Component {
 
  render() {
    return (
      <div> 
        <Layout stack={this.props.data.allContentfulProject.edges[0].node.stack}/>
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
          stack
        }
      }
    }
    }
`