import React, { useEffect } from "react";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.4rem",
          fontWeight: 300,
          color: "#181714",
          marginBottom: "1rem",
          borderBottom: "1px solid #e2ddd4",
          paddingBottom: "0.6rem",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: "0.88rem",
          color: "#6a6760",
          lineHeight: 1.9,
          fontWeight: 300,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Para({ children }) {
  return <p style={{ marginBottom: "0.9rem" }}>{children}</p>;
}

export default function LegalPage({ page, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const isPrivacy = page === "privacy";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(24,23,20,0.7)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#f7f5f1",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "3rem 3.5rem",
          position: "relative",
          borderTop: "3px solid #b8916a",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "sticky",
            top: 0,
            float: "right",
            background: "none",
            border: "1px solid #e2ddd4",
            color: "#6a6760",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.4rem 0.9rem",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "1rem",
          }}
        >
          Close ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem", clear: "both" }}>
          <div
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9a7450",
              marginBottom: "0.7rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ display: "block", width: "16px", height: "1px", background: "#b8916a" }} />
            Lux Oasis Advisory &amp; Services LLC
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "2rem",
              fontWeight: 300,
              color: "#181714",
              marginBottom: "0.4rem",
            }}
          >
            {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
          </h1>
          <p style={{ fontSize: "0.72rem", color: "#9c9890", letterSpacing: "0.06em" }}>
            Last updated: January 2025 &nbsp;·&nbsp; Entertainment Consultancy Division
          </p>
        </div>

        {isPrivacy ? (
          <>
            <Section title="1. Introduction">
              <Para>
                Lux Oasis Advisory &amp; Services LLC ("we", "our", "the Company") is committed to
                protecting the privacy of all individuals who interact with our website and
                consultancy services. This Privacy Policy explains how we collect, use, store, and
                protect your personal information in connection with our Entertainment Consultancy
                Division, operated from Dubai, United Arab Emirates.
              </Para>
              <Para>
                By using this website or submitting an inquiry, you agree to the practices described
                in this policy.
              </Para>
            </Section>

            <Section title="2. Information We Collect">
              <Para>We collect information you provide directly when you:</Para>
              <ul style={{ paddingLeft: "1.4rem", marginBottom: "0.9rem" }}>
                {[
                  "Submit a consultancy inquiry through our contact form (name, email, organisation, project details)",
                  "Contact us via WhatsApp or email",
                  "Engage with us in the course of a consultancy engagement",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
                ))}
              </ul>
              <Para>
                We also collect limited technical data automatically, including IP address, browser
                type, pages visited, and time spent on the site, for the purpose of improving site
                performance. This data is not used to identify individuals.
              </Para>
            </Section>

            <Section title="3. How We Use Your Information">
              <Para>Your information is used solely to:</Para>
              <ul style={{ paddingLeft: "1.4rem", marginBottom: "0.9rem" }}>
                {[
                  "Respond to consultancy inquiries and project discussions",
                  "Communicate with you regarding potential or active engagements",
                  "Improve our website and service offering",
                  "Comply with applicable legal obligations",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
                ))}
              </ul>
              <Para>
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes. Your data is treated with the same discretion we apply to all
                operational matters.
              </Para>
            </Section>

            <Section title="4. Data Storage & Security">
              <Para>
                All personal data submitted through this website is stored securely. We implement
                appropriate technical and organisational measures to protect your information against
                unauthorised access, alteration, disclosure, or destruction.
              </Para>
              <Para>
                As a Dubai-based company, we operate in compliance with the UAE Personal Data
                Protection Law (Federal Decree-Law No. 45 of 2021) and applicable data protection
                regulations.
              </Para>
            </Section>

            <Section title="5. Retention">
              <Para>
                We retain personal data only for as long as necessary to fulfil the purposes outlined
                in this policy, or as required by law. Inquiry data from individuals who do not
                proceed to an engagement is retained for a maximum of 12 months.
              </Para>
            </Section>

            <Section title="6. Your Rights">
              <Para>You have the right to:</Para>
              <ul style={{ paddingLeft: "1.4rem", marginBottom: "0.9rem" }}>
                {[
                  "Request access to the personal data we hold about you",
                  "Request correction of inaccurate data",
                  "Request deletion of your data",
                  "Withdraw consent at any time where processing is based on consent",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>
                ))}
              </ul>
              <Para>
                To exercise any of these rights, contact us at the details provided in Section 8.
              </Para>
            </Section>

            <Section title="7. Cookies">
              <Para>
                This website uses minimal cookies necessary for site functionality and performance
                analytics. We do not use tracking cookies for advertising purposes. By continuing to
                use the site, you consent to this limited use of cookies.
              </Para>
            </Section>

            <Section title="8. Contact">
              <Para>
                For any privacy-related queries or to exercise your rights, please contact:
              </Para>
              <Para>
                <strong style={{ color: "#181714", fontWeight: 500 }}>
                  Lux Oasis Advisory &amp; Services LLC
                </strong>
                <br />
                Dubai, United Arab Emirates
                <br />
                WhatsApp: +971 58 508 9283
                <br />
                Website: www.luxoasisadvisory.com
              </Para>
            </Section>
          </>
        ) : (
          <>
            <Section title="1. Acceptance of Terms">
              <Para>
                By accessing this website or engaging the services of Lux Oasis Advisory &amp;
                Services LLC — Entertainment Consultancy Division ("the Company"), you agree to be
                bound by these Terms &amp; Conditions. If you do not agree to these terms, please
                discontinue use of this website.
              </Para>
            </Section>

            <Section title="2. Nature of Services">
              <Para>
                Lux Oasis Advisory &amp; Services LLC provides operational consultancy services for
                live entertainment venues, production companies, and corporate event organisers.
                Services include but are not limited to: venue operations consultancy, production
                management advisory, set building and workshop management, CAD technical planning,
                budget and production oversight, AI and operational systems implementation, and
                international corporate event production.
              </Para>
              <Para>
                All services are subject to a separate consultancy agreement or engagement letter
                agreed between the Company and the client prior to commencement of work.
              </Para>
            </Section>

            <Section title="3. Website Use">
              <Para>
                This website is provided for informational purposes and to facilitate initial
                consultancy inquiries. The content on this website does not constitute a contractual
                offer. All engagements are formalised through a separate written agreement.
              </Para>
              <Para>
                You may not reproduce, distribute, or use any content from this website for
                commercial purposes without prior written consent from the Company.
              </Para>
            </Section>

            <Section title="4. Intellectual Property">
              <Para>
                All content on this website — including text, design, structure, and branding — is
                the intellectual property of Lux Oasis Advisory &amp; Services LLC. Unauthorised
                reproduction or use is strictly prohibited.
              </Para>
              <Para>
                Consultancy outputs, reports, CAD documentation, and operational frameworks produced
                during an engagement remain the intellectual property of the Company until full
                payment is received, at which point ownership transfers to the client as specified in
                the engagement agreement.
              </Para>
            </Section>

            <Section title="5. Confidentiality">
              <Para>
                The Company treats all client information, project details, and operational data with
                strict confidentiality. We do not disclose client relationships, project specifics,
                or commercially sensitive information to third parties without explicit consent.
              </Para>
              <Para>
                Clients are equally expected to treat any proprietary methodologies, frameworks, or
                operational intelligence shared by the Company as confidential.
              </Para>
            </Section>

            <Section title="6. Limitation of Liability">
              <Para>
                The Company's liability in connection with any consultancy engagement is limited to
                the total fees paid by the client for the specific engagement in question. The
                Company accepts no liability for indirect, consequential, or incidental losses
                arising from the use of consultancy advice or operational recommendations.
              </Para>
              <Para>
                The Company makes no warranties regarding outcomes of operational implementations
                beyond the scope of work defined in the engagement agreement.
              </Para>
            </Section>

            <Section title="7. Governing Law">
              <Para>
                These Terms &amp; Conditions are governed by and construed in accordance with the
                laws of the United Arab Emirates. Any disputes shall be subject to the exclusive
                jurisdiction of the courts of Dubai, UAE.
              </Para>
            </Section>

            <Section title="8. Amendments">
              <Para>
                The Company reserves the right to update these Terms &amp; Conditions at any time.
                The most current version will always be published on this website. Continued use of
                the website following any update constitutes acceptance of the revised terms.
              </Para>
            </Section>

            <Section title="9. Contact">
              <Para>
                For any questions regarding these Terms &amp; Conditions:
              </Para>
              <Para>
                <strong style={{ color: "#181714", fontWeight: 500 }}>
                  Lux Oasis Advisory &amp; Services LLC
                </strong>
                <br />
                Dubai, United Arab Emirates
                <br />
                WhatsApp: +971 58 508 9283
                <br />
                Website: www.luxoasisadvisory.com
              </Para>
            </Section>
          </>
        )}
      </div>
    </div>
  );
}
