"use client";

import { FormEvent, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const INSTAGRAM_URL = "YOUR_INSTAGRAM_LINK_HERE";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/nirvana-design-club-of-igdtuw/";

/* =========================================================
   ICONS
========================================================= */

function Logo() {
  return (
    <div className="logo">
      <span className="logo-horizontal" />
      <span className="logo-vertical" />
      <span className="logo-star">✦</span>
    </div>
  );
}

function CrosshairIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M11 1.5V6M11 16V20.5M1.5 11H6M16 11H20.5"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <circle
        cx="11"
        cy="11"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 10H16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M11.5 5.5L16 10L11.5 14.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="12"
        cy="12"
        r="4.1"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="17.5"
        cy="6.6"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <circle
        cx="8"
        cy="8"
        r="1"
        fill="currentColor"
      />

      <path
        d="M8 11V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 16V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 13.3C12 11.9 12.9 11 14.1 11C15.5 11 16 12 16 13.4V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            "Something went wrong."
        );
      }

      setStatus("success");

      setStatusMessage(
        "Your message has been received successfully."
      );

      setForm(initialForm);
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    }
  }

  return (
    <div className="page" id="top">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <div className="navbar-inner">

          <a href="/" className="brand">
            <Logo />

            <span className="brand-name">
              N I R V A N A
            </span>
          </a>

          <nav className="navigation">

            <a href="/">
              HOME
            </a>

            <a href="/about">
              ABOUT
            </a>

            <a href="/events">
              EVENTS
            </a>

            <a href="/team">
              TEAM
            </a>

            <a
              href="/contact"
              className="active"
            >
              CONTACT
            </a>

          </nav>

          <div className="nav-right">

            <button
              type="button"
              className="crosshair"
              aria-label="Focus"
            >
              <CrosshairIcon />
            </button>

            <button
              type="button"
              className="menu"
              aria-label="Menu"
            >
              <MenuIcon />
            </button>

          </div>

        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="main">

        {/* ===================================================
            LEFT SECTION
        =================================================== */}

        <section className="left-section">

          <div
            className="left-arc"
            aria-hidden="true"
          />

          <div className="left-inner">

            <div className="breadcrumb">

              <span className="breadcrumb-dot" />

              <span>
                N I R V A N A
              </span>

              <span className="breadcrumb-slash">
                /
              </span>

              <span>
                C O N T A C T
              </span>

            </div>

            <p className="intro">
              Have an idea, collaboration or something
              <br />
              exciting in mind?
            </p>

            <div className="create-title">
              LET’S CREATE SOMETHING
            </div>

            <div className="talk-wrapper">

              <div className="talk-glow" />

              <h1>
                LET’S
                <br />
                TALK.
              </h1>

            </div>

          </div>

          {/* =================================================
              LEFT CONTACT INFORMATION
          ================================================= */}

          <div className="left-bottom">

            <div className="left-line" />

            <div className="left-contact-grid">

              {/* FIRST EMAIL */}

              <div className="left-contact-item">

                <div className="left-contact-label">
                  EMAIL
                </div>

                <div className="email-list">

                  <a
                    href="mailto:nirvana.sponsorship123@gmail.com"
                    className="left-email"
                  >
                    nirvana.sponsorship123@gmail.com
                  </a>

                  <a
                    href="mailto:designclubigdtuw@gmail.com"
                    className="left-email"
                  >
                    designclubigdtuw@gmail.com
                  </a>

                </div>

              </div>

              {/* LOCATION */}

              <div className="left-contact-item">

                <div className="left-contact-label">
                  LOCATION
                </div>

                <div className="left-location">
                  New Delhi, India
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            RIGHT SECTION
        =================================================== */}

        <section className="right-section">

          <div className="right-inner">

            <div className="right-header">

              <div className="get-touch">
                GET IN TOUCH
              </div>

              <h2>
                Tell us what’s
                <br />
                on your mind.
              </h2>

              <p>
                Whether it’s a collaboration, an idea, an event
                <br />
                or just a hello — we’d love to hear from you.
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="field-row">

                <div className="field">

                  <label htmlFor="name">
                    NAME <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="field">

                  <label htmlFor="email">
                    EMAIL <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>

              <div className="field">

                <label htmlFor="subject">
                  SUBJECT <span>*</span>
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  required
                />

              </div>

              <div className="field">

                <label htmlFor="message">
                  MESSAGE <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little more..."
                  required
                />

              </div>

              <button
                type="submit"
                className="send-button"
                disabled={status === "loading"}
              >

                <span>
                  {status === "loading"
                    ? "SENDING..."
                    : "SEND MESSAGE"}
                </span>

                <span className="button-arrow">
                  <ArrowIcon />
                </span>

              </button>

              <div className="form-footer">

                <div
                  className={`response ${
                    status === "success"
                      ? "success"
                      : status === "error"
                      ? "error"
                      : ""
                  }`}
                >

                  <span className="response-dot" />

                  <span>
                    {statusMessage ||
                      "We usually respond within 24–48 hours."}
                  </span>

                </div>

                <div className="year">
                  NIRVANA / 2026
                </div>

              </div>

            </form>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <a
            href="/"
            className="footer-brand"
          >

            <Logo />

            <div>

              <div className="footer-name">
                N I R V A N A
              </div>

              <div className="footer-campus">
                IGDTUW
              </div>

            </div>

          </a>

          {/* =================================================
              CLICKABLE ICONS ONLY
          ================================================= */}

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/designclubigdtuw/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/company/nirvana-design-club-of-igdtuw/about"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

          </div>

          <a
            href="#top"
            className="back-top"
          >

            <span>
              BACK TO TOP
            </span>

            <span className="back-arrow">
              ↑
            </span>

          </a>

        </div>

      </footer>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           RESET
        ===================================================== */

        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          padding: 0;

          background: #05040b;

          color: #f5f2fa;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        :global(a) {
          text-decoration: none;
          color: inherit;
        }

        :global(button),
        :global(input),
        :global(textarea) {
          font-family: inherit;
        }

        /* =====================================================
           PAGE
        ===================================================== */

        .page {
          min-height: 100vh;

          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 15% 48%,
              rgba(
                76,
                36,
                125,
                0.12
              ),
              transparent 32%
            ),
            #05040b;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

        .navbar {
          height: 75px;

          border-bottom:
            1px solid
            rgba(
              152,
              128,
              195,
              0.35
            );

          background: #080710;
        }

        .navbar-inner {
          width: 100%;
          height: 100%;

          padding:
            0 5.7%;

          display: flex;
          align-items: center;
        }

        /* =====================================================
           LOGO
        ===================================================== */

        .logo {
          position: relative;

          width: 27px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #b59af5;

          flex-shrink: 0;
        }

        .logo-star {
          position: relative;
          z-index: 3;

          font-size: 24px;
          line-height: 1;

          font-weight: 300;

          color: #b59af5;

          text-shadow:
            0 0 13px
            rgba(
              178,
              145,
              255,
              0.7
            );
        }

        .logo-horizontal,
        .logo-vertical {
          position: absolute;

          background: #a98de5;

          opacity: 0.8;
        }

        .logo-horizontal {
          width: 26px;
          height: 1px;
        }

        .logo-vertical {
          width: 1px;
          height: 30px;
        }

        /* =====================================================
           BRAND
        ===================================================== */

        .brand {
          display: flex;
          align-items: center;

          gap: 18px;
        }

        .brand-name {
          font-size: 17px;

          letter-spacing:
            0.31em;

          font-weight: 400;

          color: #e4deef;
        }

        /* =====================================================
           NAVIGATION
        ===================================================== */

        .navigation {
          margin-left: auto;

          display: flex;
          align-items: center;

          height: 100%;

          gap: 41px;
        }

        .navigation a {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;

          color: #eeeaf5;

          font-size: 11px;

          font-weight: 400;

          transition:
            color 0.2s ease;
        }

        .navigation a:hover {
          color: #bea0f7;
        }

        .navigation a.active {
          color: #c0a0fa;
        }

        .navigation a.active::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;

          bottom: 17px;

          height: 1px;

          background: #b596ee;

          box-shadow:
            0 0 9px
            rgba(
              181,
              145,
              244,
              0.6
            );
        }

        /* =====================================================
           NAV RIGHT
        ===================================================== */

        .nav-right {
          margin-left: 42px;

          display: flex;
          align-items: center;

          gap: 25px;
        }

        .crosshair,
        .menu {
          border: 0;

          padding: 0;

          background: transparent;

          color: #d0c7df;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =====================================================
           MAIN
        ===================================================== */

        .main {
          min-height: 826px;

          display: grid;

          grid-template-columns:
            47% 53%;

          border-bottom:
            1px solid
            rgba(
              152,
              128,
              195,
              0.35
            );
        }

        /* =====================================================
           LEFT
        ===================================================== */

        .left-section {
          position: relative;

          overflow: hidden;

          min-width: 0;

          border-right:
            1px solid
            rgba(
              152,
              128,
              195,
              0.30
            );

          padding:
            70px 5.7% 54px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;
        }

        /* =====================================================
           LARGE ARC
        ===================================================== */

        .left-arc {
          position: absolute;

          width: 700px;
          height: 700px;

          left: -205px;
          top: 150px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(
                92,
                43,
                153,
                0.29
              ) 0%,
              rgba(
                82,
                37,
                143,
                0.18
              ) 33%,
              rgba(
                64,
                30,
                117,
                0.10
              ) 52%,
              transparent 71%
            );

          filter: blur(18px);

          pointer-events: none;
        }

        .left-arc::before {
          content: "";

          position: absolute;

          width: 665px;
          height: 665px;

          left: 17px;
          top: 16px;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              135,
              76,
              217,
              0.17
            );

          box-shadow:
            0 0 55px
            rgba(
              100,
              46,
              166,
              0.13
            );
        }

        .left-arc::after {
          content: "";

          position: absolute;

          width: 570px;
          height: 570px;

          left: 65px;
          top: 65px;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              133,
              72,
              216,
              0.10
            );
        }

        /* =====================================================
           LEFT INNER
        ===================================================== */

        .left-inner {
          position: relative;
          z-index: 3;
        }

        /* =====================================================
           BREADCRUMB
        ===================================================== */

        .breadcrumb {
          display: flex;
          align-items: center;

          gap: 13px;

          color: #b7acd0;

          font-size: 9px;

          letter-spacing:
            0.25em;

          margin-bottom: 34px;
        }

        .breadcrumb-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #bba1fa;

          box-shadow:
            0 0 10px
            rgba(
              190,
              160,
              255,
              0.3
            );
        }

        .breadcrumb-slash {
          color: #70677d;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .intro {
          margin: 0 0 62px;

          color: #c6bed7;

          font-size: 17px;

          line-height: 1.55;

          font-weight: 400;
        }

        /* =====================================================
           CREATE
        ===================================================== */

        .create-title {
          margin-bottom: 20px;

          color: #b796f3;

          font-size: 15px;

          font-weight: 500;

          letter-spacing:
            0.24em;
        }

        /* =====================================================
           TALK
        ===================================================== */

        .talk-wrapper {
          position: relative;
        }

        .talk-glow {
          position: absolute;

          width: 570px;
          height: 390px;

          left: -130px;
          top: -115px;

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(
                111,
                57,
                186,
                0.29
              ),
              rgba(
                78,
                35,
                134,
                0.12
              ) 42%,
              transparent 73%
            );

          filter: blur(16px);
        }

        .talk-wrapper::before {
          content: "";

          position: absolute;

          width: 625px;
          height: 625px;

          left: -200px;
          top: -165px;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              139,
              78,
              224,
              0.17
            );

          transform:
            rotate(-13deg);
        }

        .talk-wrapper::after {
          content: "";

          position: absolute;

          width: 495px;
          height: 495px;

          left: -135px;
          top: -105px;

          border-radius: 50%;

          border:
            1px solid
            rgba(
              138,
              75,
              220,
              0.10
            );
        }

        .talk-wrapper h1 {
          position: relative;

          z-index: 5;

          margin: 0;

          color: #f8f6fa;

          font-size:
            clamp(
              86px,
              8.5vw,
              136px
            );

          font-weight: 400;

          line-height: 0.83;

          letter-spacing:
            -0.065em;
        }

        /* =====================================================
           LEFT BOTTOM
        ===================================================== */

        .left-bottom {
          position: relative;

          z-index: 5;
        }

        .left-line {
          width: 100%;
          height: 1px;

          margin-bottom: 36px;

          background:
            rgba(
              151,
              127,
              192,
              0.28
            );
        }

        .left-contact-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 30px;
        }

        .left-contact-label {
          margin-bottom: 16px;

          color: #aba1bd;

          font-size: 9px;

          letter-spacing:
            0.24em;
        }

        /* =====================================================
           TWO EMAILS
        ===================================================== */

        .email-list {
          display: flex;

          flex-direction: column;

          gap: 9px;
        }

        .left-email,
        .left-location {
          color: #e9e3f0;

          font-size: 13px;

          line-height: 1.5;
        }

        .left-email {
          transition:
            color 0.2s ease;
        }

        .left-email:hover {
          color: #bea0f5;
        }

        /* =====================================================
           RIGHT
        ===================================================== */

        .right-section {
          min-width: 0;

          position: relative;

          background:
            radial-gradient(
              ellipse at 50% 20%,
              rgba(
                45,
                25,
                77,
                0.13
              ),
              transparent 48%
            ),
            #05040b;

          padding:
            73px 5.7% 54px;
        }

        .right-inner {
          width: 100%;

          max-width: 690px;

          margin: 0 auto;
        }

        /* =====================================================
           RIGHT HEADER
        ===================================================== */

        .get-touch {
          margin-bottom: 18px;

          color: #b594f0;

          font-size: 14px;

          letter-spacing:
            0.12em;

          font-weight: 500;
        }

        .right-header h2 {
          margin: 0;

          color: #f8f6fa;

          font-size:
            clamp(
              48px,
              4vw,
              62px
            );

          line-height: 0.97;

          font-weight: 400;

          letter-spacing:
            -0.045em;
        }

        .right-header p {
          margin:
            24px 0 0;

          color: #aaa2b9;

          font-size: 16px;

          line-height: 1.55;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form {
          margin-top: 39px;

          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 25px;
        }

        .field-row {
          width: 100%;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 23px;
        }

        .field {
          width: 100%;
        }

        .field label {
          display: block;

          margin-bottom: 10px;

          color: #ddd5e8;

          font-size: 10px;

          line-height: 1;

          letter-spacing:
            0.22em;

          font-weight: 500;
        }

        .field label span {
          color: #b795ef;
        }

        .field input,
        .field textarea {
          width: 100%;

          border:
            1px solid
            rgba(
              133,
              107,
              176,
              0.52
            );

          border-radius: 7px;

          background:
            rgba(
              4,
              3,
              10,
              0.74
            );

          color: #f2eef7;

          outline: none;

          font-size: 14px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .field input {
          height: 51px;

          padding:
            0 17px;
        }

        .field textarea {
          height: 129px;

          padding:
            16px 17px;

          resize: vertical;

          min-height: 110px;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #82788f;

          opacity: 1;
        }

        .field input:hover,
        .field textarea:hover {
          border-color:
            rgba(
              163,
              133,
              210,
              0.65
            );
        }

        .field input:focus,
        .field textarea:focus {
          border-color:
            #a98bd6;

          box-shadow:
            0 0 0 2px
            rgba(
              153,
              116,
              208,
              0.10
            );
        }

        /* =====================================================
           SEND BUTTON
        ===================================================== */

        .send-button {
          position: relative;

          width: 100%;
          height: 50px;

          border: 0;

          border-radius: 7px;

          background:
            linear-gradient(
              105deg,
              #c8b7f0 0%,
              #b39be4 47%,
              #c6b5ee 100%
            );

          color: #251c36;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 12px;

          font-weight: 600;

          letter-spacing:
            0.20em;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.2s ease;
        }

        .send-button:hover:not(:disabled) {
          transform:
            translateY(-1px);

          box-shadow:
            0 12px 30px
            rgba(
              132,
              98,
              197,
              0.18
            );
        }

        .send-button:disabled {
          opacity: 0.65;

          cursor: not-allowed;
        }

        .button-arrow {
          position: absolute;

          right: 19px;

          top: 50%;

          transform:
            translateY(-50%);

          display: flex;
        }

        /* =====================================================
           FORM FOOTER
        ===================================================== */

        .form-footer {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-top: -2px;
        }

        .response {
          display: flex;

          align-items: center;

          gap: 10px;

          color: #a49bad;

          font-size: 11px;
        }

        .response-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #a88fd5;
        }

        .response.success {
          color: #a8cdb5;
        }

        .response.success .response-dot {
          background: #92d6a9;
        }

        .response.error {
          color: #d69696;
        }

        .response.error .response-dot {
          background: #d27f7f;
        }

        .year {
          color: #81788f;

          font-size: 8px;

          letter-spacing:
            0.15em;

          white-space: nowrap;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .footer {
          height: 99px;

          background: #07060d;
        }

        .footer-inner {
          width: 100%;
          height: 100%;

          padding:
            0 5.7%;

          display: flex;
          align-items: center;
        }

        .footer-brand {
          display: flex;
          align-items: center;

          gap: 18px;
        }

        .footer-name {
          color: #ded7e9;

          font-size: 16px;

          letter-spacing:
            0.30em;
        }

        .footer-campus {
          margin-top: 5px;

          color: #b9afc8;

          font-size: 10px;

          letter-spacing:
            0.17em;
        }

        /* =====================================================
           SOCIAL ICONS ONLY
        ===================================================== */

        .footer-socials {
          display: flex;
          align-items: center;

          gap: 22px;

          margin-left: 136px;
        }

        .social-icon {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #bdb2cb;

          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .social-icon:hover {
          color: #c4a2fa;

          transform:
            translateY(-2px);
        }

        /* =====================================================
           BACK TO TOP
        ===================================================== */

        .back-top {
          margin-left: auto;

          display: flex;
          align-items: center;

          gap: 13px;

          color: #aaa0ba;

          font-size: 9px;

          letter-spacing:
            0.18em;
        }

        .back-arrow {
          color: #d4c9e2;

          font-size: 16px;

          letter-spacing: 0;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .navigation {
            gap: 25px;
          }

          .nav-right {
            margin-left: 25px;
          }

          .main {
            grid-template-columns:
              46% 54%;
          }

          .talk-wrapper h1 {
            font-size: 88px;
          }

          .right-header h2 {
            font-size: 47px;
          }

          .footer-socials {
            margin-left: 70px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 760px) {

          .navbar {
            height: 68px;
          }

          .navbar-inner {
            padding:
              0 24px;
          }

          .brand {
            gap: 12px;
          }

          .brand-name {
            font-size: 14px;
            letter-spacing:
              0.25em;
          }

          .navigation {
            display: none;
          }

          .nav-right {
            margin-left: auto;

            gap: 18px;
          }

          .main {
            grid-template-columns:
              1fr;

            min-height: auto;
          }

          .left-section {
            min-height: 650px;

            border-right: 0;

            border-bottom:
              1px solid
              rgba(
                152,
                128,
                195,
                0.30
              );

            padding:
              48px 24px 45px;
          }

          .breadcrumb {
            font-size: 8px;
          }

          .intro {
            font-size: 16px;

            margin-bottom: 47px;
          }

          .create-title {
            font-size: 12px;
          }

          .talk-wrapper h1 {
            font-size:
              clamp(
                76px,
                21vw,
                110px
              );
          }

          .left-arc {
            left: -280px;
            top: 145px;
          }

          .talk-wrapper::before {
            left: -280px;
          }

          .talk-wrapper::after {
            left: -210px;
          }

          .left-contact-grid {
            grid-template-columns:
              1fr;
          }

          .right-section {
            padding:
              55px 24px 50px;
          }

          .right-header h2 {
            font-size:
              clamp(
                43px,
                12vw,
                58px
              );
          }

          .right-header p {
            font-size: 15px;
          }

          .field-row {
            grid-template-columns:
              1fr;

            gap: 25px;
          }

          .form-footer {
            align-items: flex-start;

            flex-direction: column;
          }

          .footer {
            height: auto;
          }

          .footer-inner {
            min-height: 120px;

            padding:
              28px 24px;

            flex-wrap: wrap;

            gap: 25px;
          }

          .footer-brand {
            width: 100%;
          }

          .footer-socials {
            margin-left: 0;

            gap: 15px;
          }

          .back-top {
            margin-left: auto;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 430px) {

          .brand-name {
            font-size: 13px;
          }

          .left-section {
            min-height: 620px;
          }

          .talk-wrapper h1 {
            font-size: 76px;
          }

          .right-header h2 {
            font-size: 43px;
          }

          .right-header p br {
            display: none;
          }

          .footer-inner {
            align-items: flex-start;
          }

          .back-top {
            width: 100%;
            margin-left: 0;
          }

        }

      `}</style>

    </div>
  );
}