import React from "react";
import { SectionLabel, SectionTitle } from "./UI";

const stats = [
  { num: "20+", label: "Years Live Operations" },
  { num: "3", label: "Countries of Operation" },
  { num: "IT", label: "Italian Opera House Experience" },
  { num: "360°", label: "Full Production Capability" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6.5rem 3.5rem",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
          maxWidth: "1160px",
          margin: "0 auto",
        }}
      >
        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#f7f5f1",
                padding: "2rem 1.7rem",
                border: "1px solid #e2ddd4",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "2.8rem",
                  fontWeight: 300,
                  color: "#9a7450",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#9c9890",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}

          {/* Wide highlight box */}
          <div
            style={{
              gridColumn: "1 / -1",
              background: "#f4ede2",
              border: "1px solid rgba(184,145,106,0.22)",
              padding: "2rem 1.7rem",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "#181714",
                lineHeight: 1.45,
                marginBottom: "0.5rem",
              }}
            >
              Dubai Opera — Founding Team, 2016
            </div>
            <div
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#9c9890",
              }}
            >
              Part of the core operational team that opened one of the region's
              most significant performing arts venues — establishing backstage
              systems, stage workflows, and production standards from the ground
              up
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            Built from <em style={{ fontStyle: "italic", color: "#9a7450" }}>real-world</em> execution
          </SectionTitle>
          {[
            "Damiano Pesciaioli's career spans two decades of operational leadership inside the world's most demanding live entertainment environments — from historic Italian opera houses to world-class venues in Beirut and Dubai.",
            "His expertise covers the full production spectrum: venue operations, set design and construction, CAD technical planning, budget management, AI-powered operational systems, and international corporate events. Not one dimension of live entertainment. All of them.",
            "The consultancy exists to transfer that accumulated intelligence to venues, production companies, and organisations that require the highest standard of operational execution.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.9rem",
                color: "#6a6760",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "1.1rem",
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
