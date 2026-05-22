import React from "react";
import { SectionLabel, SectionTitle } from "./UI";

const items = [
  {
    year: "2016\nOpening",
    title: "Founding Operational Team",
    org: "Dubai Opera — Dubai, UAE",
    desc: "Part of the core team that opened Dubai Opera on 31 August 2016. Responsible for establishing stage systems, backstage workflows, CAD technical documentation, set-building supervision, and production coordination standards ahead of the inaugural performance. Went on to manage operational delivery across hundreds of productions spanning opera, ballet, musical theatre, orchestral performance, and international corporate events.",
    highlight: "Opening Night — Plácido Domingo, 31 August 2016",
  },
  {
    year: "Prior",
    title: "Stage Operations Manager",
    org: "Caracalla Dance Theatre — Beirut, Lebanon",
    desc: "Operational leadership within one of the Middle East's most celebrated and internationally recognised dance companies. International touring production management, backstage systems, and set workshop oversight for a company whose productions toured to the Kennedy Center, Sadler's Wells, and major stages across Europe and Asia.",
    highlight: null,
  },
  {
    year: "Formation",
    title: "Italian Opera House & Workshop Experience",
    org: "Italy — Historic Opera Houses & Scenic Workshops",
    desc: "Formative operational experience across Italy's historic opera houses and scenic fabrication workshops. The discipline of stage operations, scenic construction, CAD technical planning, and production management was established inside some of the world's oldest and most demanding live performance institutions. This is where the professional foundation was built.",
    highlight: null,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "6.5rem 3.5rem", background: "#ffffff" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>
          A career built
          <br />
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>
            inside the machine
          </em>
        </SectionTitle>
      </div>

      <div
        style={{
          maxWidth: "820px",
          margin: "3.5rem auto 0",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "3rem",
              padding: "2.8rem 0",
              borderBottom: i < items.length - 1 ? "1px solid #e2ddd4" : "none",
              position: "relative",
            }}
          >
            {/* Vertical rule */}
            <div
              style={{
                position: "absolute",
                left: "159px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "#e2ddd4",
              }}
            />

            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "155px",
                top: "3.1rem",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#b8916a",
                border: "2px solid #ffffff",
              }}
            />

            {/* Year */}
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.8rem",
                color: "#9a7450",
                paddingTop: "0.15rem",
                lineHeight: 1.5,
                fontStyle: "italic",
                whiteSpace: "pre-line",
              }}
            >
              {item.year}
            </div>

            {/* Content */}
            <div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.35rem",
                  fontWeight: 300,
                  color: "#181714",
                  marginBottom: "0.3rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.64rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#9a7450",
                  marginBottom: "0.8rem",
                }}
              >
                {item.org}
              </div>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "#6a6760",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>

              {item.highlight && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    background: "#f4ede2",
                    border: "1px solid rgba(184,145,106,0.25)",
                    padding: "0.4rem 0.85rem",
                    marginTop: "0.9rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.11em",
                      textTransform: "uppercase",
                      color: "#9a7450",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
