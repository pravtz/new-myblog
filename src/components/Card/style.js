import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Container = styled.div`
  border: 2px solid ${props => props.theme.colors.cardBorder};
  border-radius: ${props => props.theme.definitions.borderRadius};
  width: 73%;
  margin-top: 0.625em; // 10px
  margin-bottom: 0.625em; // 10px
  margin-left: 4.6875em; // 70px
  :hover {
    border: 2px solid ${props => props.theme.colors.cardBorderHover};
  }
  ${media.greaterThan("medium")`
    width:85%;
    margin-left:10%;

  `}
  ${media.greaterThan("large")`
    margin:0.625em 3em ;

  `}
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
  flex-direction: column;
  padding: 5px;
  ${media.greaterThan("small")`
    flex-direction: row;
  `}
`
export const WrapperBox = styled.div`
  margin: auto;
  width: 100%;
  border-radius: ${props => props.theme.definitions.borderRadius};
  background-color: ${props => props.theme.colors.bgBox};

  ${media.greaterThan("small")`
    width: auto;
    background-color: ${props => props.theme.colors.backgroundMain};
  `}
`
export const Box = styled.div`
  background-color: ${props => props.theme.colors.bgBox};
  border-radius: ${props => props.theme.definitions.borderRadius};
  width: 90px;
  height: 168px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  ${media.greaterThan("small")`
    margin: ${props => props.theme.definitions.spaces};
  `}
  ${media.greaterThan("medium")`
    width: 100px;
    height: 168px;
    flex-direction: column;

  `}
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
