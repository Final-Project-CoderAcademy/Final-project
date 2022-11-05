import React from "react";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  const testImages = [
    {
      src: "https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "bigbanana",
    },
    {
      src: "https://images.unsplash.com/photo-1602242896752-b5c57d3f395f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80.jpg",
      alt: "pinklake",
    },
  ];

  return (
    <Carousel>
      {testImages.map(({ src, alt }, id) => (
        <Carousel.Item key={id}>
          <img className="d-block w-100" src={src} alt={alt} />
          <Carousel.Caption>
            <h2>Explore Australia</h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default About;
