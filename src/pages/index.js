import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Card from "../components/Card"

import Seo from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="Home" />
      <ContainerStyled>
        <WrapperCardStyled>
          {postList.map(
            (
              {
                node: {
                  frontmatter: { category, date, description, title },
                  fields: { slug },
                },
              },
              index
            ) => (
              <Card
                slug={slug}
                title={title}
                description={description}
                data={date}
                category={category}
                key={date}
              />
            )
          )}
        </WrapperCardStyled>
      </ContainerStyled>
    </Layout>
  )
}
const ContainerStyled = styled.div``
const WrapperCardStyled = styled.div``

export default IndexPage
