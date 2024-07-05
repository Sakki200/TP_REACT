import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
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
import BacktoTop from "./assets/components/BacktoTop.tsx";
import Preloader from "./assets/components/Preloader.tsx";

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
    <Preloader />
    <BacktoTop />
  </React.StrictMode>
);
