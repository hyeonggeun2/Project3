import React from "react";
import "./Main.css"
import Nav from './Nav';
import Footer from './Footer'

function Main() {
  return (
    <div>
      <Nav />
      <div className="main">
        MAIN
      </div>
      <Footer />
    </div>
  );
}

export default Main;
