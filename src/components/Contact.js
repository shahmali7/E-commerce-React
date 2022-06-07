import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import contactPhoto from "../images/Photo1.png";

const Contact = () => {
  return (
    <Container>
      <Row>
        <h1 className="mt-4">Have Some Questions?</h1>
        <hr />

        <div className="contactNacbar">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="590"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=warsaw%20ursynow&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="map"
                content
              ></iframe>
              <a href="https://www.online-timer.net">map</a>
              <br />
              <a href="https://www.embedgooglemap.net">google iframe map</a>
            </div>
          </div>
          <img
            src={contactPhoto}
            alt="Contact us"
            width="630px"
            height="500px"
            className="mt-3"
          />

          <div>
            <Form className="mt-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="outline-primary ">Send Message</Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
