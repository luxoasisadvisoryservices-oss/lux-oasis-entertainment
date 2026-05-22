import React from "react";

export function SectionLabel({ children, center = false }) {
  return (
    <div
      style={{
        fontSize: "0.59rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#9a7450",
        marginBottom: "1.1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.7rem",
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span
        style={{
          display: "block",
          width: "18px",
          height: "1px",
          background: "#b8916a",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}

export function SectionTitle({ children, style = {} }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "clamp(1.9rem, 2.8vw, 3rem)",
        fontWeight: 300,
        color: "#181714",
        lineHeight: 1.14,
        marginBottom: "1.3rem",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "#e2ddd4",
      }}
    />
  );
}

export function Tag({ children }) {
  return (
    <span
      style={{
        fontSize: "0.56rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#9c9890",
        border: "1px solid #e2ddd4",
        padding: "0.25rem 0.6rem",
        background: "#f7f5f1",
      }}
    >
      {children}
    </span>
  );
}
