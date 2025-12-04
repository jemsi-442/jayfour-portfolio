// src/components/pages/Dashboard/Settings.jsx
import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";

export default function Settings() {
  return (
    <Container className="my-5 p-4 rounded shadow-lg bg-black text-light min-vh-100">
      <h2 className="text-center mb-4"> Settings</h2>

      <Card className="bg-secondary text-light shadow-lg border-0 p-4 mb-4">
        <h5>Profile Settings</h5>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary">Update Profile</Button>
        </Form>
      </Card>

      <Card className="bg-secondary text-light shadow-lg border-0 p-4">
        <h5>Account Settings</h5>
        <Form>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" />
          </Form.Group>
          <Button variant="danger">Change Password</Button>
        </Form>
      </Card>
    </Container>
  );
}
