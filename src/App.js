import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Path from "./components/layout/Path";
import GDPChart from "./components/charts/GDPChart";
import Battlefield from "./components/charts/Battlefield";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Path />
            <Switch>
              {/* <GDPChart /> */}
              <Route exact path="/" component={GDPChart} />
              <Route exact path="/battlefield" component={Battlefield} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
