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
          <h2>What/Why is Crate Full?</h2>
          <p>
            Crate Full is a non-profit organization that provides food for those
            in need. Food is homemade and/or homegrown and hand delivered to
            families.
          </p>
        </div>

        <div className="img fake-food"></div>
      </div>

      <div className="who-for">
        <h2>Who is Crate Full For?</h2>
        <p>Crate Full was created to benefit those who are without food.</p>
        <button type="button">Who?</button>
      </div>

      <div className="counter">
        <Counter />
      </div>

      <div className="how-help">
        <h2>How Can You Help?</h2>
        <p>We always need more food. We always need more hands.</p>
        <button type="button">Donate</button>
        <button type="button">Volunteer</button>
      </div>
    </div>
  );
}

export default Home;
