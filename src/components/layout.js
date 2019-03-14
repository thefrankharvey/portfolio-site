/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
// import Header from "./header"

import Footer from "./Footer"
import Menu from "./Menu"
import "./layout.css"
import ArticleContainer from "./ArticleContainer"
class Layout extends React.Component {
  render() {
    return (
      <div className='app'>
      <Menu />
      <ArticleContainer stack={this.props.stack}/>
      <Footer/>
      </div>
    )
  }
}

export default Layout
// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }


