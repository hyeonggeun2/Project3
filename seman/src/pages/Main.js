import React from "react";
import "./Main.css"
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import MyCarousel from '../components/Carousel/Carousel';

function Main() {
  return (
    <div>
      <Nav />
      <div className="main">
      <MyCarousel/>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
