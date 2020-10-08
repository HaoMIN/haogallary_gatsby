import React, { useState, useEffect } from "react"

import { Container, Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Image from "react-bootstrap/Image"

import Title from "../components/Title"
import Layout from "../components/layout"
import Footer from "../components/footer"

import Projects from "./projects"


import "../components/aboutme.scss"

import { PortfolioProvider } from "../context/context"
import { projectsData, footerData } from "../data/data"

const AboutMe = ({ pageTitle }) => {
  const [projects, setProjects] = useState([])
  const [footer, setFooter] = useState({})

  useEffect(() => {
    setProjects([...projectsData])
    setFooter({ ...footerData })
  }, [])

  return (
    <PortfolioProvider value={{ projects, footer }}>
      <Layout>
        <section id="about">
          <Title title="About Me" />

          <Container>
            <Row className="about-wrapper">
              <Col md={6} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <Image src={require("../images/profile.png")} />
                  </div>
                </Fade>
              </Col>
              <Col md={6} sm={12}>
                <Fade duration={1000} delay={1000} distance="30px">
                  <div className="about-wrapper__info">
                    <p className="about-wrapper__info-text">
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      }
                    </p>
                    <p className="about-wrapper__info-text">
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."
                      }
                    </p>
                    <p className="about-wrapper__info-text">
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                      }
                    </p>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </section>
        <Projects />
        <Footer />
      </Layout>
    </PortfolioProvider>
  )
}

export default AboutMe
