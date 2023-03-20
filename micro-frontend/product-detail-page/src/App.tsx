import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Footer } from "home/Footer";
// import { Header } from "home/Header";

import './index.css'

const Header = React.lazy(() => import("home/Header").then(module => {
  return { default: module.Header }
}))

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>loading...</div>}>
        <Header />
      </Suspense>
      pdp content
      <Footer />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
