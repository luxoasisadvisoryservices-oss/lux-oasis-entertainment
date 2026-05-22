import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Italy from "./components/Italy";
import Experience from "./components/Experience";
import { Philosophy, Company, Contact, Footer } from "./components/Sections";
import { Divider } from "./components/UI";
import WhatsApp from "./components/WhatsApp";
import LegalPage from "./components/LegalPage";

export default function App() {
  const [legalPage, setLegalPage] = useState(null);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Portfolio />
        <Divider />
        <Italy />
        <Divider />
        <Experience />
        <Divider />
        <Philosophy />
        <Divider />
        <Company />
        <Divider />
        <Contact />
      </main>
      <Footer onOpenLegal={(page) => setLegalPage(page)} />

      {/* Floating WhatsApp button */}
      <WhatsApp />

      {/* Legal modal */}
      {legalPage && (
        <LegalPage page={legalPage} onClose={() => setLegalPage(null)} />
      )}
    </>
  );
}
