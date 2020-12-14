import React from "react"
import { Link } from "gatsby"

import * as S from "./style"
import ImageProfile from "./ImageProfile"
import SocialIcons from "../SocialIcons/SocialIcons"

const Header = () => {
  return (
    <>
      <S.WrapperAside>
        <S.WrapperIcon>
          <S.ClearIcon />
        </S.WrapperIcon>

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
                <Link to="/">
                  <S.HomeIcon />
                  <S.NameIcon>Home</S.NameIcon>
                </Link>
              </li>
              {/*  ------------- start -- temporarily hide ------------ */}
              <li className="hide">
                <Link to="/about/">
                  <S.AboutIcon />
                  <S.NameIcon>Sobre</S.NameIcon>
                </Link>
              </li>
              <li className="hide">
                <Link to="/category/">
                  <S.CategoryIcon />
                  <S.NameIcon>Categoria</S.NameIcon>
                </Link>
              </li>
              <li className="hide">
                <Link to="/portifolio/">
                  <S.PortifolioIcon />
                  <S.NameIcon>Portifólio</S.NameIcon>
                </Link>
              </li>
              <li className="hide">
                <Link to="/contact/">
                  <S.ContactIcon />
                  <S.NameIcon>Contato</S.NameIcon>
                </Link>
              </li>
              {/*  ------------- end -- temporarily hide ------------ */}
            </ul>
          </S.MenuProfile>
        </S.WrapperProfile>
      </S.WrapperAside>
    </>
  )
}
export default Header
