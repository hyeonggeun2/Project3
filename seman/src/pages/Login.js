import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import './Login.css';

function Login(){
  return(
    <div>
      <Nav/>
      <h2>로그인</h2>
      <div className="login_container">
        <div className="login_box">
          <form>
            <div className="user_input">
              <input type="text" name="username" placeholder="아이디"></input>
              <input type="password" name="password" placeholder="비밀번호"></input>
            </div>
            <button>로그인</button>
          </form>
          <div className="login_search">
            <a href="#">아이디 찾기</a>&nbsp;/&nbsp;
            <a href="#">비밀번호 찾기</a>
          </div>
        </div>
        <div className="login_signup">
          <p>회원가입을 하시면 다양하고 특별한<br/>혜택이 준비되어 있습니다.</p>
          <a href="/signup">회원가입</a>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Login;