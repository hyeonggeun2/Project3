import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import './SignUp.css';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

function SignUp(){
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  
  const [postcode, setPostcode] = useState("");
  const [full_address, setFull_address] = useState("");
  
  return(
    <div>
      <Nav/>
      <h2>회원가입</h2>
      <div className="signup_container">
        <form>
          <table className="signup_table">
            <tr>
              <th>아이디</th>
              <td><input type="text" name="username"></input></td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td><input type="password" name="password1"></input></td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td><input type="password" name="password2"></input></td>
            </tr>
            <tr>
              <th>이름</th>
              <td><input type="text" name="name"></input></td>
            </tr>
            <tr className="phone_table">
              <th>휴대전화</th>
              <td>
                <select name="phone_number1" style={{height:30}}>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                &nbsp;-&nbsp;<input className="phone_numbers" name="phone_number2" type="text" maxlength="4"></input>
                &nbsp;-&nbsp;<input className="phone_numbers" name="phone_number3" type="text" maxlength="4"></input>
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>
                <input type="text" id="postcode" readonly="readonly" value={postcode} name="postcode"></input>
                <input type="button" onClick={openPostCode} value="검색" id="post_search"></input><br></br>
                <div id="popupDom">
                  {isPopupOpen && (
                    <PopupDom>
                      <PopupPostCode onClose = {closePostCode}
                                    postcode = {setPostcode}
                                    address = {setFull_address} />
                    </PopupDom>
                  )}
                </div>
                <input type="text" id="full_address" readonly="readonly" value={full_address} name="full_address"></input><br></br>
                <input type="text" id="detail_address" placeholder="상세주소" name="detail_address"></input>
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td><input type="email" className="user_email" placeholder="example@kw.ac.kr" name="email"></input></td>
            </tr>
          </table>
          <button className="signup_btn">가입하기</button>
        </form>
      </div>
      <Footer/>
    </div>
    
  )  
}

export default SignUp;