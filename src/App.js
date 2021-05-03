import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Calculator from "./components/Calculator";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 className="app-header">A-Star path Vishualizer</h2>
         <Wrapper />
      </div>
    );
  }
}

export default App;