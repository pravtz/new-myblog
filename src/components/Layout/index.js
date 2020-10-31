import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import { ThemeProvider } from "styled-components"
import main from "../../theme/main"
import * as S from "./style"

import Header from "../Header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={main}>
      <S.LayoutWrapper>
        <Header />
        <main>{children}</main>
      </S.LayoutWrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
