import React, { useState } from "react";
import { SectionLabel, SectionTitle } from "./UI";

const productions = [
  {
    cat: "Venue Launch",
    title: "Dubai Opera Opening Night",
    venue: "Dubai Opera — 31 August 2016",
    body: "Part of the core operational team that opened Dubai Opera with the legendary Plácido Domingo. Responsible for establishing backstage systems, stage workflows, and production coordination infrastructure for the inaugural season — 2,000 seats, three auditorium configurations.",
    badge: "Founding Launch",
  },
  {
    cat: "Musical Theatre",
    title: "West End & Broadway Productions",
    venue: "Dubai Opera, Downtown Dubai",
    body: "Operational delivery of landmark productions including Les Misérables, Phantom of the Opera (Dubai Opera's longest-running show), Mamma Mia, and Mary Poppins. Full production management from load-in to closing night across extended multi-week runs.",
    badge: "Production Management",
  },
  {
    cat: "Opera",
    title: "International Opera Productions",
    venue: "Dubai Opera & International Venues",
    body: "Backstage and stage operations for full-scale opera productions by major international touring companies. Works by Verdi, Puccini, Bizet, and others, performed across premium international venues in Europe and the UAE.",
    badge: "Stage Operations",
  },
  {
    cat: "Ballet",
    title: "International Ballet Programmes",
    venue: "Dubai Opera, Downtown Dubai",
    body: "Stage operations for major international ballet companies performing Swan Lake, Giselle, Don Quixote, and other canonical works. Technical rehearsal management, backstage coordination, and multi-night run execution for leading European companies.",
    badge: "Stage Management",
  },
  {
    cat: "Dance Theatre",
    title: "Caracalla International Touring",
    venue: "Caracalla Dance Theatre — Global",
    body: "Production operations for one of the Middle East's most celebrated dance companies, whose productions have toured to the Kennedy Center, Sadler's Wells, and major stages across Europe and Asia. International logistics, backstage systems, and touring production management.",
    badge: "International Touring",
  },
  {
    cat: "Set Construction",
    title: "Scenic & Set Workshop Management",
    venue: "Multiple Productions",
    body: "Supervision and management of scenic construction workshops for large-scale productions. From technical CAD drawings to physical fabrication oversight and stage-ready delivery. Set building expertise across opera, ballet, musical theatre, and corporate event formats.",
    badge: "Set Building",
  },
  {
    cat: "Orchestral & Concert",
    title: "Orchestral & Live Concert Events",
    venue: "Dubai Opera, Downtown Dubai",
    body: "Stage operations for full orchestral performances, internationally acclaimed soloists including Andrea Bocelli and Anna Netrebko, and large-scale concert productions. Technical management across all three of Dubai Opera's auditorium configurations.",
    badge: "Technical Operations",
  },
  {
    cat: "Corporate Events",
    title: "International Corporate Productions",
    venue: "UAE & International Markets",
    body: "Production management for large-scale corporate events, gala dinners, award ceremonies, and premium brand activations. Operational delivery to the same standards applied to world-class live entertainment, applied to high-expectation corporate environments.",
    badge: "Corporate Production",
  },
  {
    cat: "Cultural Events",
    title: "Cultural & Regional Productions",
    venue: "Middle East & International",
    body: "Operational management across a diverse programme of cultural performances, regional artists, and international cultural productions. Including the first Emirati artist to perform at Dubai Opera and major regional events across the UAE and broader Arab world.",
    badge: "Cultural Production",
  },
];

function ProductionCard({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#ffffff" : "#f7f5f1",
        border: `1px solid ${hovered ? "rgba(184,145,106,0.38)" : "#e2ddd4"}`,
        padding: "1.8rem 1.6rem",
        transition: "all 0.28s",
      }}
    >
      <div
        style={{
          fontSize: "0.57rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#b8916a",
          marginBottom: "0.7rem",
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
        }}
      >
        <span
          style={{
            display: "block",
            width: "8px",
            height: "1px",
            background: "#b8916a",
          }}
        />
        {p.cat}
      </div>

      <div
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.15rem",
          fontWeight: 300,
          color: "#181714",
          marginBottom: "0.35rem",
          lineHeight: 1.2,
        }}
      >
        {p.title}
      </div>

      <div
        style={{
          fontSize: "0.72rem",
          color: "#9c9890",
          marginBottom: "0.7rem",
          fontWeight: 300,
        }}
      >
        {p.venue}
      </div>

      <p
        style={{
          fontSize: "0.79rem",
          color: "#6a6760",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        {p.body}
      </p>

      <span
        style={{
          display: "inline-block",
          fontSize: "0.55rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          background: "#f4ede2",
          color: "#9a7450",
          padding: "0.18rem 0.55rem",
          marginTop: "0.9rem",
          border: "1px solid rgba(184,145,106,0.22)",
        }}
      >
        {p.badge}
      </span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ padding: "6.5rem 3.5rem", background: "#ffffff" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <SectionLabel>Selected Productions</SectionLabel>
        <SectionTitle style={{ maxWidth: "580px" }}>
          Productions executed
          <br />
          across{" "}
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>
            world-class stages
          </em>
        </SectionTitle>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6a6760",
            lineHeight: 1.88,
            fontWeight: 300,
            maxWidth: "500px",
            marginBottom: "3.5rem",
          }}
        >
          A selection of the production formats and performance categories
          managed across Dubai Opera, Caracalla Dance Theatre, and international
          venues over two decades of live entertainment operations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {productions.map((p) => (
            <ProductionCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
