import React from "react";
import "./Main.css"
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'

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
