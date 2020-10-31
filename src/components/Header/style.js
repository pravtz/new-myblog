import styled from "styled-components"
import { pxToEm } from "../../styles/mixins"

export const WrapperAside = styled.aside`
  background-color: #92cdc6;
  width: 413px;
  height: 100vh;
`
export const WrapperProfile = styled.div`
  margin: 20px auto;
  max-width: ${pxToEm("211")};
  justify-content: center;
  text-align: center;
`
export const WrapperImage = styled.div`
  max-width: ${pxToEm("177")};
  margin: auto;
`
export const NameProfile = styled.h1`
  font-family: ${props => props.theme.fonts.profileName};
  color: ${props => props.theme.colors.profileName};
  font-size: ${pxToEm("30")};
  font-weight: 700;
`
export const OccupationProfile = styled.h2`
  font-family: ${props => props.theme.fonts.profileOccuparion};
  color: ${props => props.theme.colors.profileOccuparion};
  font-size: ${pxToEm("14")};
`
export const IconsProfile = styled.div``
export const MenuProfile = styled.nav`
  ul {
    li {
      a {
        text-decoration-line: none;
        font-family: ${props => props.theme.fonts.navbarMenu};
        color: ${props => props.theme.colors.navbarMenu};
      }
    }
  }
`
