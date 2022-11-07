import React from "react";
import { Container } from "react-bootstrap";
import blogTopImage from "../material/blogSection.jpg";

const BlogList = () => {
  return (
    <>
      <figure className="position-relative">
        <img src={blogTopImage} alt="blog" className="img-fluid pageImg" />
        <figcaption>
          <h1>BLOG</h1>
        </figcaption>
      </figure>
    </>
  );
};

export default BlogList;
