import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  border: 2px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.definitions.borderRadius};
  width: 1170px;
  margin: 20px;
  :hover {
    border: 2px solid ${props => props.theme.colors.cardBorderHover};
  }
`
export const LinkWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  :hover {
    div > div > div {
      :first-child {
        background-color: ${props => props.theme.colors.bgBoxHover};
      }
    }
  }
`
export const WrapperCard = styled.div`
  display: flex;
`
export const WrapperBox = styled.div``
export const Box = styled.div`
  background-color: ${props => props.theme.colors.bgBox};
  border-radius: ${props => props.theme.definitions.borderRadius};
  width: 100px;
  height: 168px;
  margin: ${props => props.theme.definitions.spaces};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`
export const ContentBox = styled.p`
  color: white;
  text-align: center;
  margin: ${props => props.theme.definitions.spaces};
  font-family: ${props => props.theme.fonts.textBox};
  font-weight: 700;
  font-size: 26px;
  text-transform: uppercase;
`
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${props => props.theme.definitions.spaces};
  margin-right: ${props => props.theme.definitions.spaces};
  margin-bottom: ${props => props.theme.definitions.spaces};
  width: 100%;
`
export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.titleCard};
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
`
export const SubTitle = styled.h2`
  font-family: ${props => props.theme.fonts.descriptionCard};
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`
export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`

export const DataCard = styled.p`
  font-family: ${props => props.theme.fonts.dateCard};
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`
