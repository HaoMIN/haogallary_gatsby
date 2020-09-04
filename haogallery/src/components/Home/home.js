import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import StyledFullBackground from "../Homebackground/homebackgroundImg"
import { graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Home = props => {
  return (
    <StyledFullBackground>
      <div id="home">
      <Container>
        <Fade left duration={2000} delay={500} distance="30px">
          <h1 className="home-title">
            Hi, my name is Hao
            <br />
            Welcome
          </h1>
        </Fade>
        <Fade left duration={1000} delay={1000} distance="30px">
          <p className="home-cta">
            <a className="cta-btn cta-btn--home">
              {/* <Link to="about" smooth="true" duration={1000}> */} 
                {"Know more"}
              {/* </Link> */}
            </a>
          </p>
        </Fade>
      </Container>
      </div>
    </StyledFullBackground>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "sarah-dorweiler-123483.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
