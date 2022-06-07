import React from "react";
import { Button, Modal, Form, Container,Row, Col } from "react-bootstrap";
import register from '../images/register.jpg'
import '../css/style.css'
const SignUp = () => {
  return (
    <Container>
    <Row>
    <Col sm={12} className='mt-1'>
      <h1>Register</h1>
      <hr/>
    </Col>
    <div className="signUpNavbar">
    <img src={register} alt='register' height='600px' width='650px' className="registerPhoto"/>
      <div>

      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button className="btn btn-primary w-100 mb-3">
            {" "}
            <span className="fa fa-google me-2"></span>Register With Google
          </Button>
          <Button className="btn btn-primary w-100 mb-3">
            {" "}
            <span className="fa fa-facebook me-2"></span>Register With Facebook
          </Button>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="Text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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

export default SignUp;
