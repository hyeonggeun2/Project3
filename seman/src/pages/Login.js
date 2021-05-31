import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import './Login.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import axios from "axios";

function Login(props){
  const dispatch = useDispatch()
  const [Id, setId] = useState("")
  const [Password, setPassword] = useState("")

  const onIdHandler = (e) => {
    setId(e.target.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('ID', Id)
    console.log('Password', Password)

    let body = {
      username: Id,
      password: Password
    }

    axios.post('/api/members/login/', body)
    // dispatch(loginUser(body)).then(
    //   response => {
    //     if (response.payload.loginSuccess) {
    //       props.history.push('/') // 첫 페이지로 돌아가도록
    //     }
    //     else{
    //       alert('Error')
    //     }
    //   }
    // )
  }

  return(
    <div>
      <Nav/>
      <h2>로그인</h2>
      <div className="login_container">
        <div className="login_box">
          <form onSubmit={onSubmitHandler}>
            <div className="user_input">
              <input type="text" name="username" placeholder="아이디" value={Id} onChange={onIdHandler}></input>
              <input type="password" name="password" placeholder="비밀번호" value={Password} onChange={onPasswordHandler}></input>
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