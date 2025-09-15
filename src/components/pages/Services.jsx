import React, { useEffect, useState, useContext } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FaCode, FaMobileAlt, FaCloud, FaShieldAlt, FaChartBar, FaRobot,
  FaFileAlt, FaLandmark, FaIdCard, FaUniversity, FaShip, FaBuilding, FaQuestion
} from "react-icons/fa";

// Function ya kuchagua icon kulingana na title
const getServiceIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("web")) return <FaCode />;
  if (t.includes("mobile")) return <FaMobileAlt />;
  if (t.includes("cloud")) return <FaCloud />;
  if (t.includes("cyber")) return <FaShieldAlt />;
  if (t.includes("analytics") || t.includes("data")) return <FaChartBar />;
  if (t.includes("ai") || t.includes("robot")) return <FaRobot />;
  if (t.includes("rita")) return <FaFileAlt />;
  if (t.includes("brela")) return <FaLandmark />;
  if (t.includes("nida")) return <FaIdCard />;
  if (t.includes("tausi")) return <FaUniversity />;
  if (t.includes("immigration") || t.includes("visa")) return <FaShip />;
  if (t.includes("heslb") || t.includes("lorms")) return <FaBuilding />;
  if (t.includes("tra") || t.includes("tax")) return <FaChartBar />;
  return <FaQuestion />; // default icon kama haina match
};

export default function Services() {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  const [services, setServices] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    // Mock services zote
    const mockServices = [
      { title: "Web Development", description: "Build responsive websites" },
      { title: "Mobile Apps", description: "iOS & Android apps" },
      { title: "Cybersecurity", description: "Protect systems & data" },
      { title: "Data Analytics", description: "Insights from data" },
      { title: "AI & Robotics", description: "Automation & intelligent solutions" },
      { title: "RITA Services", description: "Tax compliance and support" },
      { title: "BRELA Registration", description: "Business registration services" },
      { title: "NIDA Services", description: "National identification support" },
      { title: "Tausi University", description: "Education & Training" },
      { title: "Immigration & Visa", description: "Travel documentation assistance" },
      { title: "HESLB / LORMS", description: "Loan and scholarship management" },
      { title: "TRA / Tax Services", description: "Revenue & tax consultancy" },
    ];
    setServices(mockServices);
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) return;
    const newService = { title: newTitle, description: newDescription };
    setServices([newService, ...services]);
    setNewTitle(""); setNewDescription("");
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-start py-5">
      <Container className="p-4 rounded shadow-lg bg-black">
        <h2 className="text-center mb-5 animate-fadeIn">Our Services</h2>

        {/* Admin Upload */}
        {isAdmin && (
          <Form onSubmit={handleUpload} className="mb-4 animate-fadeIn delay-200">
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Service Title"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Service Description"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className="hover-scale w-100">Add Service</Button>
          </Form>
        )}

        <Row>
          {services.map((s, index) => (
            <Col key={index} md={4} className="mb-4 animate-fadeIn delay-400">
              <Card className="h-100 text-center bg-secondary text-light shadow-lg border-0 hover-scale">
                <Card.Body>
                  <div className="text-primary mb-3" style={{ fontSize: "2.5rem" }}>
                    {getServiceIcon(s.title)}
                  </div>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .hover-scale { transition: transform 0.2s ease-in-out; }
          .hover-scale:hover { transform: scale(1.05); }
        `}
      </style>
    </div>
  );
}
