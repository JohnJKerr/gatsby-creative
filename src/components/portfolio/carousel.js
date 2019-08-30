import React from "react"
import PropTypes from "prop-types"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import "./carousel.scss"

const PortfolioCarousel = ({ images, current }) => {
  const carouselItems = images.map((image, index) =>
    <Carousel.Item key={index}>
      <figure>
        <Img fluid={image.node.childImageSharp.fluid}/>
        <figcaption>
          <div className="bottom-bar">
            <div className="counter">{index + 1} of {images.length}</div>
          </div>
        </figcaption>
      </figure>
    </Carousel.Item>
  );

  return (
    <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
      {carouselItems}
    </Carousel>
  );
}

PortfolioCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel