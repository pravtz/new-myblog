import styled from "styled-components"
import { pxToEm } from "../../styles/mixins"
import media from "styled-media-query"

import {
  Home,
  Info as About,
  Widgets as Category,
  ImportantDevices as Portifolio,
  PermContactCalendar as Contact,
  Clear,
  Menu,
  WbSunny,
  Brightness3 as Moon,
} from "@styled-icons/material"

export const WrapperAside = styled.aside`
  background-color: #92cdc6;
  width: 70px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  ${media.greaterThan("large")`
  width: 360px;
  `}
`
export const WrapperIcon = styled.div`
  text-align: right;
  padding: 10px;
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
  display: none;

  ${media.greaterThan("large")`
    display: block;
  `}
`
export const OccupationProfile = styled.h2`
  font-family: ${props => props.theme.fonts.profileOccuparion};
  color: ${props => props.theme.colors.profileOccuparion};
  font-size: ${pxToEm("14")};
  display: none;

  ${media.greaterThan("large")`
  display: block;
`}
`
export const IconsProfile = styled.div``

export const MenuProfile = styled.nav`
  ul {
    li {
      margin-bottom: ${pxToEm("20")};
      a {
        text-decoration-line: none;
        font-family: ${props => props.theme.fonts.navbarMenu};
        font-size: ${pxToEm("20")};
        color: ${props => props.theme.colors.navbarMenu};
        :hover {
          color: ${props => props.theme.colors.navbarMenu_hover};
        }
        ${media.greaterThan("large")`
          display: flex;
          justify-content: center;
        `}
      }
    }
    .hide {
      visibility: hidden;
    }
  }
`
export const NameIcon = styled.span`
  display: none;

  ${media.greaterThan("large")`
    display:block ;
    margin-left: 0.2em;


  `}
`
const icons = () => {
  return `
    width: 22px;
    color: white;
    `
}

export const HomeIcon = styled(Home)`
  ${icons}
`
export const AboutIcon = styled(About)`
  ${icons}
`
export const CategoryIcon = styled(Category)`
  ${icons}
`
export const PortifolioIcon = styled(Portifolio)`
  ${icons}
`
export const ContactIcon = styled(Contact)`
  ${icons}
`
export const ClearIcon = styled(Clear)`
  ${icons}
  visibility:hidden;
`
export const MenuIcon = styled(Menu)`
  ${icons}
`
export const WbSunnyIcon = styled(WbSunny)`
  ${icons}
`
export const MoonIcon = styled(Moon)`
  ${icons}
`
