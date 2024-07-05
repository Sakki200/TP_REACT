import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import Header from "./assets/components/Header.tsx";
import Hero from "./assets/components/Hero.tsx";
import About from "./assets/components/About.tsx";
import Facts from "./assets/components/Facts.tsx";
import Footer from "./assets/components/Footer.tsx";
import Skills from "./assets/components/Skills.tsx";
import Resume from "./assets/components/Resume.tsx";
import Portfolio from "./assets/components/Portfolio.tsx";
import Services from "./assets/components/Services.tsx";
import Testimonials from "./assets/components/Testimonials.tsx";
import Contact from "./assets/components/Contact.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    {/* <div id="preloader"></div>
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a> */}
  </React.StrictMode>
);
