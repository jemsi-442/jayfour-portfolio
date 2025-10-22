import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach(el => observer.observe(el));
    return () => reveals.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="hero position-relative text-white">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="display-3 fw-bold mb-3">JayFour Digital Solutions</h1>
          <p className="lead mb-4">
            Tunabadilisha ndoto kuwa uhalisia kupitia teknolojia bunifu na ubunifu wa hali ya juu.
          </p>
          <a href="#services" className="btn btn-primary btn-lg me-2">
            Huduma Zetu
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Wasiliana Nasi
          </a>
        </div>
      </section>

      {/* ✅ SERVICES */}
      <section id="services" className="py-5 bg-light">
        <div className="container reveal">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Huduma Tunazotoa</h2>
            <p className="text-muted">
              Tumejikita katika kutoa huduma bora kwa ubunifu na teknolojia za kisasa.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-laptop display-4 mb-3 text-primary"></i>
                  <h5 className="card-title">Uundaji wa Tovuti</h5>
                  <p className="card-text">
                    Tunaunda tovuti za kisasa, zenye kasi, muonekano bora na zinazovutia wateja.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-graph-up display-4 mb-3 text-success"></i>
                  <h5 className="card-title">Ushauri wa Kidigitali</h5>
                  <p className="card-text">
                    Tunakusaidia kukuza biashara yako mtandaoni kwa mikakati madhubuti.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-shield-lock display-4 mb-3 text-danger"></i>
                  <h5 className="card-title">Usalama Mtandaoni</h5>
                  <p className="card-text">
                    Tunahakikisha mfumo wako upo salama dhidi ya vitisho vya mtandaoni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ABOUT */}
      <section id="about" className="py-5">
        <div className="container reveal">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="About us"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Kuhusu Sisi</h2>
              <p>
                JayFour Digital Solutions ni kampuni ya kidigitali inayolenga kutoa huduma bora
                katika nyanja za teknolojia, ubunifu, na ushauri. Tunajivunia ubora na ubunifu
                unaotuwezesha kutoa matokeo yanayomvutia kila mteja.
              </p>
              <p>
                Tunatengeneza suluhisho endelevu na rahisi kutumia kwa wateja wa sekta mbalimbali.
                Lengo letu kuu ni kukuza biashara yako na kukuunganisha na dunia ya kidigitali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT FORM */}
      <section id="contact" className="py-5 bg-light">
        <div className="container reveal">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Wasiliana Nasi</h2>
            <p className="text-muted">Tujulishe unachohitaji — tupo kwa ajili yako.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="p-4 bg-white shadow rounded">
                <div className="mb-3">
                  <label className="form-label">Jina Kamili</label>
                  <input type="text" className="form-control" placeholder="Andika jina lako" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Barua Pepe</label>
                  <input type="email" className="form-control" placeholder="Andika email yako" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ujumbe Wako</label>
                  <textarea className="form-control" rows="4" placeholder="Andika ujumbe wako"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Tuma Ujumbe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} JayFour Digital Solutions. Haki zote zimehifadhiwa.
        </p>
      </footer>

      {/* ✅ WHATSAPP FLOAT */}
      <a
        href="https://wa.me/255683186987"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Tuma ujumbe WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}
