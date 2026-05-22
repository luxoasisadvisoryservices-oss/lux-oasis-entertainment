import React, { useState } from "react";
import { SectionLabel, SectionTitle, Tag } from "./UI";

const services = [
  {
    num: "01",
    title: "Venue Operations Consultancy",
    body: "Backstage systems design, operational workflow optimisation, and technical operations management for world-class performing arts venues.",
    tags: ["Backstage Systems", "Workflow Design", "Technical Ops"],
  },
  {
    num: "02",
    title: "Production Management",
    body: "Full production oversight from pre-production planning through to closing night. Logistics, scheduling, supplier coordination, and on-site execution management.",
    tags: ["Full Production", "Scheduling", "Supplier Management"],
  },
  {
    num: "03",
    title: "Set Building & Workshop",
    body: "Expert oversight and management of scenic construction, set fabrication, and workshop operations. Technical supervision from design intent to stage-ready delivery.",
    tags: ["Scenic Construction", "Set Fabrication", "Workshop Management"],
  },
  {
    num: "04",
    title: "CAD Technical Planning",
    body: "Technical stage drawings, venue layouts, set construction documentation, and spatial planning. Translating creative vision into precise, buildable technical specifications.",
    tags: ["Stage Drawings", "Venue Layouts", "Technical Specs"],
  },
  {
    num: "05",
    title: "Budget & Production Overview",
    body: "End-to-end production budget development, cost control, financial reporting, and spend management across all production departments and supplier contracts.",
    tags: ["Budget Planning", "Cost Control", "Financial Reporting"],
  },
  {
    num: "06",
    title: "AI & Operational Systems",
    body: "Implementation of AI-powered operational tools for venue management, scheduling automation, reporting systems, and production intelligence. Modern infrastructure for live entertainment operations.",
    tags: ["AI Tools", "Automation", "Operational Intelligence"],
  },
  {
    num: "07",
    title: "International Corporate Events",
    body: "Operational production management for large-scale corporate events, gala dinners, award ceremonies, and premium brand activations in international markets.",
    tags: ["Corporate Events", "Gala Production", "Brand Activations"],
  },
  {
    num: "08",
    title: "Venue Launch & Readiness",
    body: "Operational systems implementation and launch coordination for new or transitioning venues. End-to-end readiness planning from infrastructure setup to first performance delivery.",
    tags: ["Launch Planning", "Systems Setup", "First Night Ready"],
  },
  {
    num: "09",
    title: "Premium Audience Experience",
    body: "Operational standards and flow systems that shape the audience journey from arrival to final curtain. Cross-departmental coordination aligned to world-class venue expectations.",
    tags: ["Audience Flow", "Dept Coordination", "Quality Standards"],
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${hovered ? "rgba(184,145,106,0.38)" : "#e2ddd4"}`,
        padding: "2.4rem",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, box-shadow 0.3s",
        boxShadow: hovered ? "0 3px 20px rgba(0,0,0,0.04)" : "none",
      }}
    >
      {/* Bottom reveal line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, #b8916a, transparent)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.38s ease",
        }}
      />

      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.78rem",
          color: "#b8916a",
          marginBottom: "1.2rem",
          display: "block",
          fontStyle: "italic",
        }}
      >
        {service.num}
      </span>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.3rem",
          fontWeight: 300,
          color: "#181714",
          marginBottom: "0.85rem",
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: "0.82rem",
          color: "#6a6760",
          lineHeight: 1.8,
          marginBottom: "1.5rem",
          fontWeight: 300,
        }}
      >
        {service.body}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {service.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "6.5rem 3.5rem", background: "#f1ede6" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <SectionLabel>Core Services</SectionLabel>
        <SectionTitle style={{ maxWidth: "520px" }}>
          Where precision
          <br />
          meets{" "}
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>performance</em>
        </SectionTitle>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6a6760",
            lineHeight: 1.88,
            fontWeight: 300,
            maxWidth: "480px",
            marginBottom: "3.5rem",
          }}
        >
          Every service is grounded in two decades of hands-on operational
          execution — not advisory theory.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
