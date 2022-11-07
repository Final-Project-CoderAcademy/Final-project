import React from "react";
import { Container } from "react-bootstrap";

const SiteDetail = () => {
  return (
    <Container className="px-sm-5 mt-5">
      <img
        src="https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt="site"
        className="my-sm-5 img-fluid mx-auto d-block"
      />
      <h3 className="mt-5 fw-bold">Title</h3>
      <p className="lh-lg fs-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        imperdiet libero. Vestibulum tincidunt ultricies tincidunt. Nullam a
        neque quis orci mattis sollicitudin id quis quam. Nunc sed placerat
        libero, quis sodales justo. Quisque sit amet ligula egestas metus
        faucibus mattis. Mauris et imperdiet dolor, et elementum magna. Maecenas
        lorem felis, luctus quis est in, ultricies tristique velit. Mauris nec
        leo vel ipsum dictum venenatis. Vestibulum tempus tellus odio, id
        elementum nibh egestas non. Integer feugiat ligula dolor. Donec nec eros
        elementum, auctor ante ut, sodales nisl. Fusce sem est, dictum non
        feugiat quis, volutpat at libero. Fusce molestie laoreet urna non
        tincidunt. Curabitur pharetra est ornare pulvinar facilisis. Quisque
        aliquam tristique euismod. Nullam et bibendum mi.
      </p>
      <div className="p-3 my-sm-5 text-sm-center commentContainer">
        <h5>LOCATION</h5>
      </div>
    </Container>
  );
};

export default SiteDetail;
