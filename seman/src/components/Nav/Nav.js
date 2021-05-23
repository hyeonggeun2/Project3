import React from "react";
import "./Nav.css";

function Nav(){
  return (
    <header>
      <nav className="nav">
        <a className="nav_title" href="/">SEMAN</a>
        <div className="nav_bar">
          <a className="login navs" href="/login">로그인</a>
          <a className="info navs" href="/info">내정보</a>
          <a className="cart navs" href="/cart">카트</a>
        </div>
      </nav>
      <div className="category">
        <a className="category-menu" href="/category/all/1">ALL</a>
        <Category title="OUTER">
          <Contents content_name="Jacket" href="/category/jacket/1"/>
          <Contents content_name="Cardigan" href="/category/cardigan/1"/>
        </Category>

        <Category title="TOP">
          <Contents content_name="T-shirts" href="/category/tshirts/1"/>
          <Contents content_name="Shirts" href="/category/shirts/1"/>
          <Contents content_name="Knit" href="/category/knit/1"/>
        </Category>

        <Category title="BOTTOM">
          <Contents content_name="Slacks" href="/category/slacks/1"/>
          <Contents content_name="Denim" href="/category/denim/1"/>
          <Contents content_name="Pants" href="/category/pants/1"/>
          <Contents content_name="Half-Pants" href="/category/half-pants/1"/>
        </Category>
        <a className="category-menu" href="/qna/1">묻고 답하기</a>
        <a className="category-menu" href="/news/1">공지사항</a>
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