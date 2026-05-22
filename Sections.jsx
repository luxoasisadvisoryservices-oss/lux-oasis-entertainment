import React, { useState } from "react";
import { SectionLabel, SectionTitle } from "./UI";

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────
export function Philosophy() {
  const pillars = [
    {
      num: "I",
      title: "Precision",
      body: "Live performance does not accommodate error. Every operational decision is made with the performance outcome as the measure of success.",
    },
    {
      num: "II",
      title: "Systems Thinking",
      body: "Sustainable quality requires deliberate systemic design — from CAD drawings to AI-powered scheduling. Operations that endure begin with architecture.",
    },
    {
      num: "III",
      title: "Execution Discipline",
      body: "Strategy without execution is incomplete. Every engagement is oriented toward practical implementation and measurable operational outcomes.",
    },
  ];

  return (
    <section
      id="philosophy"
      style={{
        padding: "7rem 3.5rem",
        background: "#181714",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionLabel center>Operational Philosophy</SectionLabel>
        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.7rem, 2.7vw, 2.7rem)",
            fontWeight: 300,
            lineHeight: 1.45,
            color: "#f0ece4",
            margin: "3rem auto",
            fontStyle: "italic",
          }}
        >
          "Great live entertainment is not only{" "}
          <strong style={{ fontStyle: "normal", fontWeight: 400, color: "#b8916a" }}>
            creative.
          </strong>
          <br />
          It is{" "}
          <strong style={{ fontStyle: "normal", fontWeight: 400, color: "#b8916a" }}>
            operational."
          </strong>
        </blockquote>
        {[
          "Behind every seamless performance exists a system. A sequence of decisions, logistics, communications, and coordinations that happen in the hours, days, and weeks before any audience takes their seat.",
          "Operational excellence is not the support function of exceptional live experience. It is the architecture upon which it is built.",
        ].map((t, i) => (
          <p
            key={i}
            style={{
              fontSize: "0.86rem",
              color: "#8a8680",
              lineHeight: 1.9,
              fontWeight: 300,
              maxWidth: "580px",
              margin: "0 auto 1.1rem",
            }}
          >
            {t}
          </p>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
          maxWidth: "1160px",
          margin: "4rem auto 0",
        }}
      >
        {pillars.map((p) => (
          <div
            key={p.num}
            style={{
              background: "#1e1c18",
              border: "1px solid #2e2c28",
              padding: "2rem 1.6rem",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.7rem",
                color: "#b8916a",
                marginBottom: "0.85rem",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              {p.num}
            </div>
            <div
              style={{
                fontSize: "0.64rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#c0bbb4",
                marginBottom: "0.55rem",
              }}
            >
              {p.title}
            </div>
            <p
              style={{
                fontSize: "0.79rem",
                color: "#68665f",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── COMPANY ─────────────────────────────────────────────────────────────────
export function Company() {
  const items = [
    { title: "Hospitality Advisory", body: "Premium short-term rental operations and hospitality systems in Dubai." },
    { title: "AI & Operational Systems", body: "AI-powered tools for venue and hospitality operational optimisation." },
    { title: "Production Consultancy", body: "Full-spectrum production management for live entertainment and events." },
    { title: "Strategic Advisory", body: "Senior consultancy across entertainment, hospitality, and operational sectors." },
  ];

  return (
    <section
      id="company"
      style={{ padding: "6.5rem 3.5rem", background: "#f1ede6" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <SectionLabel>Parent Organisation</SectionLabel>
        <SectionTitle>
          Lux Oasis Advisory
          <br />
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>
            &amp; Services LLC
          </em>
        </SectionTitle>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5.5rem",
          alignItems: "start",
          maxWidth: "1080px",
          margin: "3.5rem auto 0",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              border: "1px solid rgba(184,145,106,0.35)",
              padding: "0.6rem 1.1rem",
              marginBottom: "1.6rem",
              background: "#f4ede2",
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#b8916a",
              }}
            />
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9a7450",
              }}
            >
              Dubai, United Arab Emirates
            </span>
          </div>
          {[
            "The Entertainment Consultancy Division operates under Lux Oasis Advisory & Services LLC, a Dubai-based operational advisory and services company specialising in hospitality, live entertainment, and AI-powered operational systems.",
            "The parent company reinforces the consultancy's commitment to operational intelligence, precision, and long-term institutional relationships across entertainment, hospitality, and strategic advisory sectors.",
          ].map((t, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.88rem",
                color: "#6a6760",
                lineHeight: 1.88,
                fontWeight: 300,
                marginBottom: "1rem",
              }}
            >
              {t}
            </p>
          ))}
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2ddd4",
                padding: "1.5rem 1.3rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "#9a7450",
                  marginBottom: "0.35rem",
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontSize: "0.79rem",
                  color: "#6a6760",
                  lineHeight: 1.62,
                  fontWeight: 300,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ padding: "6.5rem 3.5rem", background: "#ffffff" }}
    >
      <div
        style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
      >
        <SectionLabel center>Contact</SectionLabel>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 3.3vw, 3.3rem)",
            fontWeight: 300,
            color: "#181714",
            margin: "1.8rem 0 0.85rem",
            lineHeight: 1.1,
          }}
        >
          Discuss Your
          <br />
          <em style={{ fontStyle: "italic", color: "#9a7450" }}>Project</em>
        </h2>
        <p
          style={{
            fontSize: "0.86rem",
            color: "#6a6760",
            lineHeight: 1.85,
            marginBottom: "2.8rem",
            fontWeight: 300,
          }}
        >
          Whether you are preparing a venue for launch, managing a complex
          production, or building operational systems for live entertainment —
          the first step is a conversation.
        </p>

        {submitted ? (
          <div
            style={{
              background: "#f4ede2",
              border: "1px solid rgba(184,145,106,0.3)",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#181714",
                marginBottom: "0.5rem",
              }}
            >
              Thank you.
            </div>
            <p style={{ fontSize: "0.86rem", color: "#6a6760", fontWeight: 300 }}>
              Your inquiry has been received. We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "0.9rem", textAlign: "left" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
              {[
                { label: "Name", type: "text", placeholder: "Your full name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <label style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9c9890" }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    style={{
                      background: "#f7f5f1",
                      border: "1px solid #e2ddd4",
                      color: "#2a2926",
                      padding: "0.78rem 0.95rem",
                      fontSize: "0.86rem",
                      fontFamily: "'DM Sans', sans-serif",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </div>

            {[
              { label: "Organisation / Venue", type: "text", placeholder: "Company or venue name" },
            ].map((f) => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9c9890" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{
                    background: "#f7f5f1",
                    border: "1px solid #e2ddd4",
                    color: "#2a2926",
                    padding: "0.78rem 0.95rem",
                    fontSize: "0.86rem",
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                    width: "100%",
                  }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9c9890" }}>
                Project Inquiry
              </label>
              <textarea
                placeholder="Describe your operational challenge, production, or project scope"
                rows={5}
                style={{
                  background: "#f7f5f1",
                  border: "1px solid #e2ddd4",
                  color: "#2a2926",
                  padding: "0.78rem 0.95rem",
                  fontSize: "0.86rem",
                  fontFamily: "'DM Sans', sans-serif",
                  outline: "none",
                  resize: "vertical",
                  width: "100%",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                alignSelf: "flex-start",
                background: "#181714",
                color: "#f7f5f1",
                border: "none",
                padding: "0.9rem 1.9rem",
                fontSize: "0.66rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.22s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#9a7450")}
              onMouseLeave={(e) => (e.target.style.background = "#181714")}
            >
              Submit Inquiry
            </button>
          </form>
        )}

        <div
          style={{
            marginTop: "2.2rem",
            paddingTop: "1.8rem",
            borderTop: "1px solid #e2ddd4",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9c9890",
          }}
        >
          Based in <span style={{ color: "#6a6760" }}>Dubai, United Arab Emirates</span>
          {" · "}
          Available for international engagements
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export function Footer({ onOpenLegal }) {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ background: "#181714" }}>

      {/* Top bar — main site link */}
      <div
        style={{
          borderBottom: "1px solid #2a2826",
          padding: "1.2rem 3.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.luxoasisadvisory.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b8916a",
            textDecoration: "none",
            border: "1px solid rgba(184,145,106,0.3)",
            padding: "0.55rem 1.3rem",
            transition: "all 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(184,145,106,0.08)";
            e.currentTarget.style.borderColor = "rgba(184,145,106,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(184,145,106,0.3)";
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <path d="M6 1L11 6L6 11M1 6H11" stroke="#b8916a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Visit Lux Oasis Advisory — luxoasisadvisory.com
        </a>
      </div>

      {/* Main footer row */}
      <div
        style={{
          padding: "2.2rem 3.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          borderBottom: "1px solid #2a2826",
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "#c0bbb4",
          }}
        >
          Lux Oasis{" "}
          <em style={{ fontStyle: "italic", color: "#b8916a" }}>
            Advisory &amp; Services LLC
          </em>
        </div>

        <div style={{ display: "flex", gap: "1.8rem", flexWrap: "wrap" }}>
          {["#services", "#portfolio", "#italy", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "#4a4840",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#8a8680")}
              onMouseLeave={(e) => (e.target.style.color = "#4a4840")}
            >
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            color: "#3a3830",
          }}
        >
          &copy; 2025 Lux Oasis Advisory &amp; Services LLC. Dubai, UAE.
        </div>
      </div>

      {/* Legal row */}
      <div
        style={{
          padding: "1.1rem 3.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Privacy Policy", page: "privacy" },
          { label: "Terms & Conditions", page: "terms" },
        ].map((item) => (
          <button
            key={item.page}
            onClick={() => onOpenLegal(item.page)}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#3a3830",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s",
              padding: 0,
            }}
            onMouseEnter={(e) => (e.target.style.color = "#8a8680")}
            onMouseLeave={(e) => (e.target.style.color = "#3a3830")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </footer>
  );
}
