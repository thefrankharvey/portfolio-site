import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

class Contact extends React.Component {
  render() {
    return (
      <div> 
          <Layout contact={this.props.data.allContentfulContact.edges} />
      </div>
    )
  }
}

export default Contact;

export const query = graphql`
  query {
    allContentfulContact {
      edges {
        node {
          type
        }
      }
     }
    }
`