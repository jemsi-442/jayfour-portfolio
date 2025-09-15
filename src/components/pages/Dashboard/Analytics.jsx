// src/components/pages/Dashboard/Analytics.jsx
import React from "react";
import { Container, Card, Row, Col, ProgressBar } from "react-bootstrap";

export default function Analytics() {
  return (
    <Container className="my-5 p-4 rounded shadow-lg bg-black text-light min-vh-100">
      <h2 className="text-center mb-4">📊 Analytics</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="bg-secondary text-light shadow-lg border-0 p-3">
            <Card.Title>Website Traffic</Card.Title>
            <ProgressBar now={70} label="70%" variant="info" />
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="bg-secondary text-light shadow-lg border-0 p-3">
            <Card.Title>Active Users</Card.Title>
            <ProgressBar now={55} label="55%" variant="warning" />
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="bg-secondary text-light shadow-lg border-0 p-3">
            <Card.Title>Revenue</Card.Title>
            <ProgressBar now={80} label="$80k" variant="success" />
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="bg-secondary text-light shadow-lg border-0 p-3">
            <Card.Title>Server Uptime</Card.Title>
            <ProgressBar now={95} label="95%" variant="danger" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
