import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {Helmet} from "react-helmet";
class Blog extends React.Component {
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