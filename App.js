import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Specializations from "./Components/Specializations";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Specializations />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
