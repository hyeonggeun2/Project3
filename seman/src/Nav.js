import React from "react";
import "./Nav.css";

function Nav(){
  return (
    <header>
      <nav className="nav">
        <a className="nav_title" href="">SEMAN</a>
        <div className="nav_bar">
          <a className="login navs" href="#">로그인</a>
          <a className="info navs" href="#">내정보</a>
          <a className="cart navs" href="#">카트</a>
        </div>
      </nav>
      <div className="category">
        <a className="category-menu" href="#">ALL</a>
        <Category title="OUTER">
          <Contents content_name="Jacket" href="#"/>
          <Contents content_name="Cardigan" href="#"/>
        </Category>

        <Category title="TOP">
          <Contents content_name="T-shirts" href="#"/>
          <Contents content_name="Shirts" href="#"/>
          <Contents content_name="Knit" href="#"/>
        </Category>

        <Category title="BOTTOM">
          <Contents content_name="Slacks" href="#"/>
          <Contents content_name="Denim" href="#"/>
          <Contents content_name="Pants" href="#"/>
          <Contents content_name="Half-Pants" href="#"/>
        </Category>
        <a className="category-menu" href="#">묻고 답하기</a>
        <a className="category-menu" href="#">공지사항</a>
      </div>
    </header>
  )
}

function Category({title, children}){
  return (
    <div className="dropdown">
      <button className="dropbtn">{title} <span className="down-button"></span></button>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  )
}

function Contents({content_name, href}){
  return (
    <a href={href}>{content_name}</a>
  )
}

export default Nav;