import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutPhoto from "../images/aboutPhoto.png";
import "../css/style.css";
const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12} className="mt-2">
            <h1>About Us</h1>
            <hr />
          </Col>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, beatae nobis voluptates hic aliquam quas iusto,
              distinctio facere itaque sed, obcaecati deleniti provident
              exercitationem molestiae accusantium corrupti iure et officia sit
              maxime explicabo? Consequuntur blanditiis totam cupiditate
              suscipit neque assumenda tempora quo, voluptatem sapiente laborum
              minima ducimus dolores enim, similique molestias facilis odio esse
              et eos, iure fugiat dolorum aliquid quos aut? Nobis perferendis
              odit eaque eius accusantium consequatur neque dicta, vel modi
              architecto libero ducimus dignissimos expedita quidem dolorum
              deserunt corrupti officia excepturi quibusdam itaque assumenda
              impedit fugiat. Fuga nisi magni porro veniam eveniet doloribus
              libero ullam dignissimos nemo.
            </p>
            <img
              src={aboutPhoto}
              alt="about us"
              height="500px"
              width="600px"
              className="aboutPhoto"
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default About;
