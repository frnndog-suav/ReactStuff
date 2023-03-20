import React from "react";
import ReactDOM from "react-dom";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import './index.css'

const App = () => (
  <div className="container">
    <Header />
    <Content />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
