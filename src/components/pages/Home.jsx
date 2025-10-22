import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCode, FaShieldAlt, FaMobileAlt, FaRobot,
  FaFileAlt, FaLandmark, FaIdCard, FaUniversity,
  FaShip, FaBuilding, FaQuestion, FaWhatsapp
} from "react-icons/fa";

const getIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("programu") || t.includes("web")) return <FaCode />;
  if (t.includes("usalama")) return <FaShieldAlt />;
  if (t.includes("simu")) return <FaMobileAlt />;
  if (t.includes("akili") || t.includes("AI")) return <FaRobot />;
  if (t.includes("rita")) return <FaFileAlt />;
  if (t.includes("brela")) return <FaLandmark />;
  if (t.includes("nida")) return <FaIdCard />;
  if (t.includes("tausi")) return <FaUniversity />;
  if (t.includes("immigration")) return <FaShip />;
  if (t.includes("heslb") || t.includes("lorms")) return <FaBuilding />;
  return <FaQuestion />;
};

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  const services = [
    {
      title: "Huduma za Programu & Mtandao",
      description: "Tunaandaa programu na mifumo ya kisasa kwa biashara, taasisi na serikali.",
      details: `Tunatengeneza tovuti (Websites) za kisasa, mobile apps, na management systems zinazorahisisha kazi zako. 
Tunazingatia ubora, usalama, na scalability. Timu yetu ina wataalamu wa IT wenye uzoefu mkubwa katika:
- Website Development
- System Integration
- Mobile App Development
- Maintenance & Support ya mifumo ya kidigitali.`
    },
    {
      title: "Usalama wa Mtandao (Cybersecurity)",
      description: "Tunakulinda dhidi ya vitisho vya kimtandao kwa usalama wa hali ya juu.",
      details: `Huduma zetu ni pamoja na:
- Penetration Testing na Network Hardening
- Data encryption & Backup Strategies
- Incident Response na Disaster Recovery
- Awareness training kwa wafanyakazi wako
Lengo letu ni kuhakikisha taarifa zako zinabaki salama kila wakati.`
    },
    {
      title: "Huduma za Serikali kwa Njia ya Mtandao",
      description: "Tunasaidia kupata huduma za serikali haraka na kwa usahihi.",
      details: `Tunarahisisha kupata huduma kama:
- RITA: Vyeti vya kuzaliwa, ndoa, vifo
- NIDA: Usajili & verification ya ID
- BRELA: Usajili wa kampuni & biashara
- TRA & HESLB: Ushauri wa kodi & mikopo
- Immigration: Maombi ya Visa na vibali`
    }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(s => observer.observe(s));

    const hero = document.querySelector(".hero");
    const onScroll = () => {
      const scrolled = window.scrollY;
      hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="jfs-home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay">
          <Container>
            <h1 className="hero-title">Karibu JAYFOUR DIGITAL SOLUTIONS</h1>
            <p className="hero-strap">
              Tunakuunganisha na ulimwengu wa kidigitali kwa suluhisho za kisasa, ubunifu na usalama.
              Huduma zetu zinalenga kuboresha biashara yako na maisha yako ya kila siku.
            </p>
            <div className="hero-ctas">
              <Button variant="primary" href="tel:+255683186987">Piga Simu</Button>
              <Button variant="success" href="https://wa.me/255683186987" target="_blank">
                Wasiliana WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-dark">
        <Container>
          <h2 className="section-title text-center mb-4">Huduma Zetu Kuu</h2>
          <Row>
            {services.map((s, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="service-card h-100 text-light text-center">
                  <div className="icon-display mb-3">{getIcon(s.title)}</div>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.description}</Card.Text>
                  <Button
                    variant="outline-light"
                    className="mt-auto"
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? "Funga Maelezo" : "Soma Zaidi"}
                  </Button>
                  <div className={`svc-panel ${expanded === index ? "open" : ""}`}>
                    <p>{s.details}</p>
                    <Button
                      variant="success"
                      size="sm"
                      href="https://wa.me/255683186987"
                      target="_blank"
                      className="mt-2"
                    >
                      Omba Huduma
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container className="text-center py-4">
          <p className="mb-1">&copy; {new Date().getFullYear()} JAYFOUR DIGITAL SOLUTIONS. Haki zote zimehifadhiwa.</p>
          <p className="small">Tunajenga suluhisho za kidigitali zenye nguvu, usalama na ubunifu.</p>
        </Container>
        <a
          href="https://wa.me/255683186987"
          className="whatsapp-float"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Chat"
        >
          <FaWhatsapp size={28} />
        </a>
      </footer>

      {/* STYLES */}
      <style>{`
        :root {
          --bg:#05060a;
          --accent:#7c5cff;
          --muted:rgba(255,255,255,0.72);
        }
        .jfs-home { background: var(--bg); color:#fff; overflow-x:hidden; }

        .hero {
          background: url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=1920&q=80')
                      center/cover no-repeat fixed;
          min-height: 85vh;
          display:flex;
          align-items:center;
          position:relative;
        }
        .hero-overlay {
          background: rgba(0,0,0,0.55);
          width:100%;
          padding:2rem 1rem;
          text-align:center;
        }
        .hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight:800; }
        .hero-strap { max-width:850px; margin:0 auto; color:var(--muted); font-size:1.1rem; }

        .hero-ctas { margin-top:1.2rem; display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; }

        .section { padding: 4.5rem 0; opacity: 0; transform: translateY(18px); transition: all 0.7s ease; }
        .section.in-view { opacity: 1; transform: translateY(0); }

        .section-title { color:var(--accent); font-weight:700; font-size:clamp(1.5rem,3vw,2rem); }

        .service-card {
          background:rgba(255,255,255,0.03);
          border:none;
          border-radius:12px;
          padding:1rem;
          box-shadow:0 6px 18px rgba(2,6,23,0.6);
          display:flex;
          flex-direction:column;
        }
        .icon-display { font-size:2.8rem; color:var(--accent); }

        .svc-panel { max-height:0; overflow:hidden; opacity:0; transition: all 0.4s ease; }
        .svc-panel.open { max-height:500px; opacity:1; margin-top:0.8rem; }

        .footer { background:#000; position:relative; }
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

        @media(max-width:768px){
          .hero-title { font-size:2rem; }
          .hero-strap { font-size:0.95rem; }
        }
      `}</style>
    </div>
  );
}

