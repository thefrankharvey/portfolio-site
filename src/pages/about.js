/* eslint-disable */
import React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"


class About extends React.Component {
 
  render() {
    return (
      <div> 
          <Layout about={this.props.data.allContentfulAbout.edges} />
        
      </div>
    )
  }
}

export default About;

export const query = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          type
        }
      }
     }
    }
`