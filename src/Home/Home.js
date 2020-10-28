import React from "react";
import Counter from "../Counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="img hero">
        <h1 className="hero-logo">Crate Full</h1>
      </div>

      <div className="summary">
        <div className="wrap">
          <h2>Crate Full Summary?</h2>
          <p>
            Crate Full is a non-profit organization that provides food for those
            in need. Food is homemade and/or homegrown and hand delivered to
            families.
          </p>
        </div>

        <div className="img fake-food"></div>
      </div>

      <div className="content">
        <h2>The Facts</h2>
        <ul className="faq-list">
          <li className="faq-item">
            <h3 className="faq-title">Who?</h3>
            <p className="faq-blurb">
              Lauren and Matthew White, many others, all volunteers
            </p>
          </li>
          <li className="faq-item">
            <h3 className="faq-title">What?</h3>
            <p className="faq-blurb">Food donations to those in need.</p>
          </li>
          <li className="faq-item">
            <h3 className="faq-title">Where?</h3>
            <p className="faq-blurb">Loomis, CA</p>
          </li>
          <li className="faq-item">
            <h3 className="faq-title">When?</h3>
            <p className="faq-blurb">
              Every third Friday of months that start with J
            </p>
          </li>
          <li className="faq-item">
            <h3 className="faq-title">Why?</h3>
            <p className="faq-blurb">
              Some people are in need, others are in a position to help. Crate
              Full is the bridge between them.
            </p>
          </li>
          <li className="faq-item">
            <h3 className="faq-title">How?</h3>
            <p className="faq-blurb">With donations and volunteers.</p>
          </li>
        </ul>
      </div>

      <div className="counter">
        <Counter />
      </div>

      <div className="content">
        <h2>How Can You Help?</h2>
        <p>We always need more food. We always need more hands.</p>
        <button type="button">Donate</button>
        <button type="button">Volunteer</button>
      </div>
    </div>
  );
}

export default Home;
