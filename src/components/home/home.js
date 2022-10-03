import React from "react"
import image1 from '../home/one.jpg'
import image2 from '../home/two.jpg'
import image3 from '../home/three.jpg'
import image4 from '../home/four.jpg'
import Mycard from "../cards/card"
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  <Mycard/>
  <pre>
  </pre>
  </>;
}
