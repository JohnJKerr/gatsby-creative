import React from "react"
import { Modal } from "react-bootstrap"
import Img from "gatsby-image"

import './portfolioCarousel.scss'

const PortfolioCarousel = ({show, onHide, images}) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      <Img fluid={images[0].node.childImageSharp.fluid} />
    </Modal.Body>
  </Modal>
)

export default PortfolioCarousel