import styled from "styled-components"

export const SocialLinksWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`
export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const SocialLinksIten = styled.li``
export const SocialLinksLink = styled.a``
export const IconWrapper = styled.div`
  width: 32px;
  color: ${props => props.theme.colors.iconSocial};
  :hover {
    color: ${props => props.theme.colors.iconSocial_hover};
  }
`
