import React from "react"
import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"

import "./Title.css"

const Title = ({ title }) => (
  <Fade left duration={2000} delay={500} distance="80px">
    <h2 className="section-title">{title}</h2>
  </Fade>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
