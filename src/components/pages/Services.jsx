import React, { useEffect, useState, useContext } from "react";
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
  const { user } = useContext(AuthContext);
  const isAdmin = user?.role === "admin";

  const [services, setServices] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
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
- Custom software solutions kulingana na mahitaji ya mteja.

Kwa JAYFOUR DIGITAL SOLUTIONS, kila mradi unachukuliwa kitaalamu, tunahakikisha code ni
clean, maintainable na inatoa faida halisi kwa mteja. Hii ni suluhisho kamili kwa wale
wanaotaka teknolojia iliyosanifiwa vizuri, salama, na yenye value kubwa.`,
      },
      {
        title: "Cybersecurity",
        description: "Protect systems & data.",
        details: `Huduma za Cybersecurity ni muhimu sana katika zama hizi za digitali, ambapo mashambulizi
ya mtandao yamekuwa ya kawaida. Tunatoa ulinzi wa kina kwa data na systems zako ili kuhakikisha
hakuna upotevu au udukuzi. Huduma zetu ni pamoja na:

- Penetration testing ili kubaini vulnerabilities.
- Network & system hardening.
- Data encryption na protection strategies.
- Incident response na disaster recovery plans.
- Training ya staff kuhusu security awareness.

Kwa kutumia JAYFOUR DIGITAL SOLUTIONS, wateja wanapata amani ya akili, ulinzi wa data, na
uhakika wa kufuata best practices za cybersecurity.`,
      },
      {
        title: "Training",
        description: "Digital skills training & mentorship.",
        details: `Tunatoa mafunzo ya vitendo na mentorship ya wataalamu katika ujuzi wa kisasa. Tunafundisha:

- Programming: Python, JavaScript, Django, na frameworks nyingine.
- Web & Mobile Development.
- Cybersecurity: Ethical hacking, risk management.
- Data Analytics & Business Intelligence.
- IT Literacy na digital transformation skills.

Kila training inafanywa na specialists, yenye exercises za real-world na projects. Tunahakikisha
wanafunzi wanapata ujuzi unaoweza kutumika mara moja kwenye kazi au miradi yao binafsi.`,
      },
      {
        title: "Consultancy",
        description: "Digital & government e-service consultancy.",
        details: `Huduma za Consultancy za JAYFOUR DIGITAL SOLUTIONS zinarahisisha maombi na ushauri
wa kidigitali na serikali. Tunasaidia:

- eRITA: Vyeti vya kuzaliwa, vifo, na ndoa.
- NIDA: Registration na verification ya national IDs.
- BRELA: Usajili wa kampuni na biashara.
- TRA & HESLB: Compliance, tax & loan guidance.
- Immigration & Visa applications.

Tunakupa mwongozo wa hatua kwa hatua na tunahakikisha unapata huduma rasmi bila kuchelewa. 
Huduma zetu ni sahihi, haraka, na zinahakikisha mteja anakuwa na experience bora ya digital governance.`,
      },
      {
        title: "RITA Services",
        description: "Birth & death certificate support.",
        details: `Huduma za eRITA ni za kisasa na zinahusisha maombi ya vyeti rasmi mtandaoni. 
Tunasaidia wateja kujaza form, kulipa, kufuatilia, na kupata vyeti vya kuzaliwa, vifo, na ndoa
kutoka serikalini kwa urahisi na haraka. Hii ni muhimu kwa usahihi wa data na documentation
ya familia au biashara.`,
      },
      {
        title: "NIDA Services",
        description: "National ID registration support.",
        details: `Huduma ya NIDA inarahisisha kupata au kusasisha National IDs. Tunasaidia:
- Kujaza forms mtandaoni.
- Marekebisho ya data na verification.
- Kupata NIDA number au replacement ya ID.

Tunahakikisha kila mteja anapata support ya haraka na sahihi, bila vikwazo vya kawaida vya
bodi za usajili.`,
      },
    ];
    setServices(mockServices);
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) return;
    const newService = { title: newTitle, description: newDescription };
    setServices([newService, ...services]);
    setNewTitle("");
    setNewDescription("");
  };

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

        {isAdmin && (
          <Form onSubmit={handleUpload} className="mb-4 animate-fadeIn delay-200">
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Service Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Service Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className="hover-scale w-100">
              Add Service
            </Button>
          </Form>
        )}

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

                      {/* ✅ Sehemu mpya ya WhatsApp au Call */}
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
