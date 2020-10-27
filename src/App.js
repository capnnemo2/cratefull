import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default class App extends React.Component {
  render() {
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
      </div>
    );
  }
}
