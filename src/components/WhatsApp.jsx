import React, { useState } from "react";

export default function WhatsApp() {
  const [hovered, setHovered] = useState(false);

  const phone = "971585089283";
  const message = encodeURIComponent(
    "Hello, I would like to discuss a consultancy project with Lux Oasis Advisory."
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        background: hovered ? "#1da851" : "#25D366",
        borderRadius: "50px",
        padding: hovered ? "0.7rem 1.2rem 0.7rem 0.85rem" : "0.78rem",
        boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
        textDecoration: "none",
        transition: "all 0.3s ease",
        overflow: "hidden",
        maxWidth: hovered ? "220px" : "52px",
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="white"
        style={{ flexShrink: 0 }}
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.773L0 32l8.456-2.01A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.79-1.867l-.487-.29-5.02 1.194 1.217-4.9-.317-.503A13.227 13.227 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.397-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.397-1.03 1.292-1.262 1.558-.232.265-.464.298-.861.1-.397-.2-1.677-.618-3.194-1.97-1.18-1.053-1.977-2.352-2.209-2.75-.232-.397-.025-.612.175-.81.18-.178.397-.464.596-.696.199-.232.265-.397.397-.662.133-.265.067-.497-.033-.696-.1-.199-.895-2.158-1.226-2.955-.323-.775-.65-.67-.895-.683l-.762-.013c-.265 0-.696.1-1.06.497-.364.398-1.393 1.36-1.393 3.317 0 1.957 1.426 3.848 1.625 4.113.199.265 2.806 4.283 6.798 6.007.95.41 1.691.655 2.269.839.953.303 1.82.26 2.506.158.764-.114 2.352-.962 2.684-1.89.332-.928.332-1.724.232-1.89-.1-.166-.364-.265-.762-.464z" />
      </svg>

      {/* Label — only visible on hover */}
      <span
        style={{
          color: "#ffffff",
          fontSize: "0.72rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
