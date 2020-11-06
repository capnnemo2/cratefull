import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

// TODO waiting for content

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <footer>
        <a href="https://www.facebook.com/groups/2732114577114672/">Facebook</a>
      </footer>
    </div>
  );
}

export default App;
