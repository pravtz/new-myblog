import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageProfile = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "photoprofile.png" }) {
        childImageSharp {
          fluid(maxWidth: 177) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt={"Ederson Pravtz"}
      style={{ borderRadius: "50%", maxWidth: "177px" }}
    />
  )
}

export default ImageProfile
