import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`
export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 25%;

  ${media.greaterThan("large")`
    display: flex;
    width: 100%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    
`}
`
export const SocialLinksIten = styled.li`
  margin-top: 10px;
`
export const SocialLinksLink = styled.a``
export const IconWrapper = styled.div`
  width: 32px;
  color: ${props => props.theme.colors.iconSocial};
  :hover {
    color: ${props => props.theme.colors.iconSocial_hover};
  }
`
