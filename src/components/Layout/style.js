import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.div`
  display: flex;
  max-width: 100vw;

  main {
    max-width: 90vw;
    margin: 0 auto;
    ${media.greaterThan("large")`
      width:100vw;
      margin-left: 360px;
 
    `}
  }
`
