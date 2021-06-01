import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Carousel.css'

function MyCarousel(){
  return(
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src="uploads/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SEMAN</h3>
          <p>다양한 스타일의 옷을 즐겨보세요.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="uploads/carousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>SEMAN</h3>
          <p>다양한 스타일의 옷을 즐겨보세요.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="uploads/carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SEMAN</h3>
          <p>다양한 스타일의 옷을 즐겨보세요.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;