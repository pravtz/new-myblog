import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"
import { ThemeProvider } from "styled-components"
import main from "../../theme/main"

import Header from "../Header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={main}>
      <Header />
      <main>{children}</main>

      <GlobalStyles />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
