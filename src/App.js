import React, { Component } from "react";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
//import Section from "./components/section";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <div id="main">
          <main>
            <div className="content" id="content">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
