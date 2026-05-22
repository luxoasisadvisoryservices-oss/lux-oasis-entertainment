import React from "react";

const scrollTo = (e, href) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 3.5rem",
        background: "#f7f5f1",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(184,145,106,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid overlay */}
      <div
        className="hero-grid-mask"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#e2ddd4 1px, transparent 1px), linear-gradient(90deg, #e2ddd4 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Centre vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, rgba(184,145,106,0.22) 20%, rgba(184,145,106,0.22) 80%, transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "840px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9a7450",
            marginBottom: "2.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "#b8916a",
            }}
          />
          Entertainment &amp; Production Consultancy — Dubai, UAE
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "#b8916a",
            }}
          />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.8rem, 5.2vw, 5.2rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "#181714",
            marginBottom: "1.6rem",
          }}
        >
          Operational{" "}
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>Intelligence</em>
          <br />
          Behind Exceptional
          <br />
          Live Performance
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "0.92rem",
            color: "#6a6760",
            lineHeight: 1.85,
            maxWidth: "560px",
            margin: "0 auto 2.8rem",
            fontWeight: 300,
          }}
        >
          Over 20 years of operational leadership across world-class venues in
          Italy, Lebanon, and the UAE. From venue launch to full production
          management, set construction to AI-powered operational systems.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            style={{
              padding: "0.82rem 2rem",
              background: "#181714",
              color: "#f7f5f1",
              fontSize: "0.66rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#9a7450")}
            onMouseLeave={(e) => (e.target.style.background = "#181714")}
          >
            Discuss a Project
          </a>
          <a
            href="#services"
            onClick={(e) => scrollTo(e, "#services")}
            style={{
              padding: "0.82rem 2rem",
              border: "1px solid #ccc7bb",
              color: "#6a6760",
              fontSize: "0.66rem",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#2a2926";
              e.target.style.color = "#181714";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#ccc7bb";
              e.target.style.color = "#6a6760";
            }}
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div
          className="animate-scroll-pulse"
          style={{
            width: "1px",
            height: "44px",
            background: "linear-gradient(to bottom, #b8916a, transparent)",
          }}
        />
        <span
          style={{
            fontSize: "0.57rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9c9890",
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
