import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

import Navibar from "../components/Navibar"

const Layout = ({ children }) => {
  return (
    <div className="bgLayout">
      <Navibar />
        <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
