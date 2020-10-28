import React from "react"
import { Link } from "gatsby"

import * as S from "./style"

const Header = () => {
  return (
    <>
      <S.WrapperNavBar>
        <Link to="/">Home</Link>
      </S.WrapperNavBar>
    </>
  )
}
export default Header
