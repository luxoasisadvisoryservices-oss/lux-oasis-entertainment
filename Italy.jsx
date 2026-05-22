import React from "react";
import { SectionLabel, SectionTitle } from "./UI";

const venues = [
  {
    title: "Historic Opera House Experience",
    sub: "Northern Italy",
    body: "Formative operational experience inside some of Northern Italy's most significant and architecturally demanding opera houses. These environments established the benchmark for backstage precision, scenic construction standards, and the operational discipline that defines world-class live performance.",
  },
  {
    title: "Lyric Theatre Operations",
    sub: "Central Italy",
    body: "Stage operational management within historic lyric theatre environments in central Italy. Working inside these institutions provided deep experience in managing live performance within architecturally constrained, historically significant venues where operational adaptability is essential.",
  },
  {
    title: "Festival & Open-Air Stages",
    sub: "Italian Summer Circuit",
    body: "Production and stage operations experience across Italy's summer festival circuit — large-format open-air performances with unique logistical and technical challenges distinct from enclosed theatre environments. Complex set builds, weather contingency planning, and large-scale coordination.",
  },
  {
    title: "Workshop & Scenic Fabrication",
    sub: "Italian Production Infrastructure",
    body: "Direct experience inside Italian scenic workshops and fabrication facilities — the foundation of set building expertise. Italy's production infrastructure remains among the world's most sophisticated, and hands-on involvement at this level established core CAD, construction, and technical management skills.",
  },
];

export default function Italy() {
  return (
    <section
      id="italy"
      style={{ padding: "6.5rem 3.5rem", background: "#f1ede6" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <SectionLabel>Italy — Formative Experience</SectionLabel>
        <SectionTitle style={{ maxWidth: "560px" }}>
          Trained inside the
          <br />
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>
            world's great opera houses
          </em>
        </SectionTitle>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6a6760",
            lineHeight: 1.88,
            fontWeight: 300,
            maxWidth: "520px",
            marginBottom: "3rem",
          }}
        >
          Before Dubai, before Caracalla, the foundation was built inside
          Italy's historic opera houses and scenic workshops — where the
          discipline of live performance operations was forged across centuries
          of theatrical tradition.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            marginBottom: "3rem",
          }}
        >
          {venues.map((v) => (
            <div
              key={v.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2ddd4",
                padding: "2rem 1.8rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#181714",
                  marginBottom: "0.3rem",
                }}
              >
                {v.title}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9a7450",
                  marginBottom: "0.8rem",
                }}
              >
                {v.sub}
              </div>
              <p
                style={{
                  fontSize: "0.81rem",
                  color: "#6a6760",
                  lineHeight: 1.78,
                  fontWeight: 300,
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          style={{
            background: "#f4ede2",
            border: "1px solid rgba(184,145,106,0.25)",
            padding: "2rem 2.2rem",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "2.5rem",
              color: "#b8916a",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            It
          </div>
          <p
            style={{
              fontSize: "0.88rem",
              color: "#6a6760",
              lineHeight: 1.82,
              fontWeight: 300,
            }}
          >
            <strong style={{ color: "#181714", fontWeight: 500 }}>
              Italy is where the discipline begins.
            </strong>{" "}
            The operational standards absorbed inside Italian opera houses and
            scenic workshops — the precision of a load-in, the hierarchy of a
            rehearsal schedule, the craft of scenic fabrication — inform every
            engagement that follows, regardless of geography or format.
          </p>
        </div>
      </div>
    </section>
  );
}
