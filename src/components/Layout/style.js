import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.div`
  display: flex;

  main {
    margin: auto auto;
    ${media.greaterThan("large")`margin-left: 360px;`}
  }
`
