import React from "react"

import { Container } from "react-bootstrap"

import Title from "../../components/Title"
import Canvas from "../../components/Canvas"
import Layout from "../../components/layout"

import "../../components/gallery.css"

const Japan = ({ pageTitle }) => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context("../../images/20190731_Japan", false, /\.(png|jpe?g|svg)$/));

  return (
    <Layout>
      <Title title="Tokyo" />
      <Container className="gallery-container">
        <Canvas album={images}></Canvas>
      </Container>
    </Layout>
  )
}

export default Japan
