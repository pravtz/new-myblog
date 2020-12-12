import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../styles/styled-post"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <S.container>
        <S.PostHeader>
          <S.PostDate>{post.frontmatter.date}</S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>

        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
      </S.container>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        category
      }
      html
    }
  }
`

export default BlogPost
