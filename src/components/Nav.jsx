import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Italy", href: "#italy" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.3rem 3.5rem",
        background: "rgba(247,245,241,0.94)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: `1px solid ${scrolled ? "#d0ccc3" : "#e2ddd4"}`,
        transition: "border-color 0.3s",
      }}
    >
      
        href="https://www.luxoasisadvisory.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1rem",
          fontWeight: 400,
          letterSpacing: "0.03em",
          color: "#181714",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Lux Oasis{" "}
        <em style={{ fontStyle: "italic", color: "#9a7450" }}>Advisory</em>
      </a>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "#6a6760",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#181714")}
              onMouseLeave={(e) => (e.target.style.color = "#6a6760")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      
        href="#contact"
        onClick={(e) => scrollTo(e, "#contact")}
        style={{
          fontSize: "0.66rem",
          letterSpacing: "0.11em",
          textTransform: "uppercase",
          color: "#9a7450",
          border: "1px solid rgba(184,145,106,0.5)",
          padding: "0.48rem 1.2rem",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#f4ede2")}
        onMouseLeave={(e) => (e.target.style.background = "transparent")}
      >
        Consultancy Inquiry
      </a>
    </nav>
  );
}
