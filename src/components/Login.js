import React from "react";

import { Button, Modal, Form, Row, Container, Col } from "react-bootstrap";

import loginPhoto from "../images/login.jpg";


import '../css/style.css'
const Login = () => {
  
  
  return (
    <Container>
      <Row>
        <Col sm={12} className="mt-2">
          <h1>Login</h1>
          <hr />
        </Col>
        <div className="loginNavbar">

          <img src={loginPhoto} width="620px" height="500px" alt="" className="loginPhoto"/>
        <div>

          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Button className="btn btn-primary w-100 mb-3">
                {" "}
                <span className="fa fa-google me-2"></span>Sign in With Google
              </Button>
              <Button className="btn btn-primary w-100 mb-3">
                {" "}
                <span className="fa fa-facebook me-2"></span>Sign in With
                Facebook
              </Button>
              <Form >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control   type="email" placeholder="Email..." />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary w-100">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        
        </div>
        
        </div>
      </Row>
    </Container>
  );
};
export default Login;
