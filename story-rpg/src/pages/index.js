import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  return (
    <div>
      <Header />
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`

export default Layout
