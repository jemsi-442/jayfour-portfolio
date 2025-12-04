import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaFileAlt,
  FaLandmark,
  FaIdCard,
  FaUniversity,
  FaShip,
  FaBuilding,
  FaQuestion,
  FaWhatsapp,
} from "react-icons/fa";

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
  return <FaQuestion />;
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const mockServices = [
      {
        title: "Programming",
        description: "Professional software & system development.",
        details: `Programming ni mchakato wa kutengeneza programu na mifumo ya kidigitali inayosaidia
biashara, taasisi, na wateja binafsi kufanikisha shughuli zao za kila siku kwa ufanisi. Huduma zetu
zinaangazia ubunifu, usahihi, na scalability ya mifumo. Tunaunda:

- Websites responsive za kisasa zenye UX/UI nzuri.
- Mobile Apps za iOS & Android zenye performance bora.
- Management Systems zinazoraidia process automation.
- Custom software solutions kulingana na mahitaji ya mteja.`,
      },
      {
        title: "Cybersecurity",
        description: "Protect systems & data.",
        details: `Huduma za Cybersecurity ni muhimu sana katika zama hizi za digitali, ambapo mashambulizi
ya mtandao yamekuwa ya kawaida. Tunatoa ulinzi wa kina kwa data na systems zako.`,
      },
      {
        title: "Training",
        description: "Digital skills training & mentorship.",
        details: `Tunatoa mafunzo ya vitendo na mentorship ya wataalamu katika ujuzi wa kisasa. Tunafundisha:
- Programming: Python, JavaScript, Django, na frameworks nyingine.
- Web & Mobile Development
- Cybersecurity
- Data Analytics & Business Intelligence`,
      },
      {
        title: "Consultancy",
        description: "Digital & government e-service consultancy.",
        details: `Huduma za Consultancy za JAYFOUR DIGITAL SOLUTIONS zinarahisisha maombi na ushauri
wa kidigitali na serikali.`,
      },
      {
        title: "RITA Services",
        description: "Birth & death certificate support.",
        details: `Huduma za eRITA ni za kisasa na zinahusisha maombi ya vyeti rasmi mtandaoni.`,
      },
      {
        title: "NIDA Services",
        description: "National ID registration support.",
        details: `Huduma ya NIDA inarahisisha kupata au kusasisha National IDs.`,
      },
    ];
    setServices(mockServices);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setFormData({ ...formData, service: services[index].title });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mdkwwwdn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setNotification({ type: "success", message: "✅ Request sent successfully!" });
        setFormData({ name: "", phone: "", service: "", message: "" });
      } else {
        throw new Error("Failed to send request");
      }
    } catch (error) {
      setNotification({ type: "error", message: "❌ Failed to send request!" });
    }
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-start py-5">
      <Container className="p-4 rounded shadow-lg bg-black">
        <h2 className="text-center mb-5 animate-fadeIn">Our Services</h2>

        {notification && (
          <div
            className={`position-fixed top-0 start-50 translate-middle-x mt-3 p-3 rounded shadow-lg ${
              notification.type === "success" ? "bg-success text-white" : "bg-danger text-white"
            }`}
          >
            {notification.message}
          </div>
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

                  <Button
                    variant="outline-info"
                    onClick={() => toggleExpand(index)}
                    className="mt-3 w-100"
                  >
                    {expandedIndex === index ? "Hide Details" : "Learn More"}
                  </Button>

                  {expandedIndex === index && (
                    <div className="mt-3 p-3 bg-dark text-light rounded shadow-sm border border-secondary text-left">
                      <p style={{ whiteSpace: "pre-line" }}>{s.details}</p>

                      <Form onSubmit={handleFormSubmit} className="mt-3">
                        <Form.Group className="mb-2">
                          <Form.Control
                            type="text"
                            placeholder="Jina lako"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Control
                            type="text"
                            placeholder="Namba ya simu"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Control
                            type="text"
                            placeholder="Huduma"
                            name="service"
                            value={s.title}
                            readOnly
                          />
                        </Form.Group>
                        <Form.Group className="mb-2">
                          <Form.Control
                            as="textarea"
                            placeholder="Ujumbe wako"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            rows={3}
                            required
                          />
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2">
                          Submit Request
                        </Button>
                      </Form>

                      <div className="mt-3 d-flex justify-content-center gap-2">
                        <Button
                          variant="success"
                          href="https://wa.me/255683186987"
                          target="_blank"
                          className="w-50"
                        >
                          WhatsApp
                        </Button>
                        <Button
                          variant="primary"
                          href="tel:+255683186987"
                          className="w-50"
                        >
                          Call
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/255683186987"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={28} />
      </a>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s forwards; }
        .delay-400 { animation-delay: 0.4s; }
        .hover-scale { transition: transform 0.2s ease-in-out; }
        .hover-scale:hover { transform: scale(1.05); }

        .whatsapp-float {
          position:fixed;
          bottom:25px;
          right:25px;
          background:#25D366;
          color:#fff;
          padding:12px;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          box-shadow:0 4px 10px rgba(0,0,0,0.3);
          transition:transform 0.2s ease;
          z-index:999;
        }
        .whatsapp-float:hover { transform:scale(1.1); }

        .svc-panel { max-height:0; overflow:hidden; opacity:0; transition: all 0.4s ease; }
        .svc-panel.open { max-height:500px; opacity:1; margin-top:0.8rem; }
      `}</style>
    </div>
  );
}
