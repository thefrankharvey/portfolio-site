import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
class About extends React.Component {
  render() {
    return (
      <div> 
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Germania+One|Roboto:400,500,700,900|Poppins|Playfair+Display:400,900"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
        </Helmet>
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
          resume {
            file {
              url
            }
          }
        }
      }
     }
    }
`