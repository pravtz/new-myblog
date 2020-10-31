import React from "react"
import { Link } from "gatsby"

import * as S from "./style"
import ImageProfile from "./ImageProfile"
import SocialIcons from "../SocialIcons/SocialIcons"

const Header = () => {
  return (
    <>
      <S.WrapperAside>
        <S.WrapperProfile>
          <S.WrapperImage>
            <ImageProfile />
          </S.WrapperImage>
          <S.NameProfile>Ederson Pravtz</S.NameProfile>
          <S.OccupationProfile>
            Systems Analyst and <br />
            Digital Marketing Professional
          </S.OccupationProfile>
          <S.IconsProfile>
            <SocialIcons />
          </S.IconsProfile>
          <S.MenuProfile>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Sobre</Link>
              </li>
              <li>
                <Link to="/">Categoria</Link>
              </li>
              <li>
                <Link to="/">Portifólio</Link>
              </li>
              <li>
                <Link to="/">Contato</Link>
              </li>
            </ul>
          </S.MenuProfile>
        </S.WrapperProfile>
      </S.WrapperAside>
    </>
  )
}
export default Header
