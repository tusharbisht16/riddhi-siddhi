import React from "react"
import { graphql } from "gatsby"

const AboutPage = ({ data }) => {
  const { markdownRemark } = data // Data from GraphQL query
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "About Us" } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`

export default AboutPage
