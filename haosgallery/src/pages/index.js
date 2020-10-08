import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import { Container } from "react-bootstrap"

import Fade from "react-reveal/Fade"
import Navibar from "../components/Navibar"

import "bootstrap/dist/css/bootstrap.min.css"
import "../components/index.scss"

const IndexPage = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <div className="intro">
      <Navibar />
      <Container id="hero">
        <div>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1500}
          delay={750}
          distance="30px"
        >
          <h1 className="hero-title">
            {"Hi, my name is Hao."}
            <br /> {"Nice to meet you."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--index">
              <Link to="/aboutme" duration={1000}>
                {'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
        </div>
      </Container>
    </div>
  )
}

export default IndexPage
