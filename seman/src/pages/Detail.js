import React from "react";
import "./Detail.css";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Magnifier from "react-magnifier";

function Detail(){
  return (
    <div>
      <Nav/>
      <div>
        <div className="detail_info">
          <div className="image_box">
            <Magnifier src = "https://fitchinnom.com/web/product/big/202105/30a78924901d19025f6980f08db6fda5.jpg" 
                      width= {400} mgWidth = {200} mgHeight = {200} mgShape="square" />
            <p className="img_text">사진에 마우스를 올리면 확대됩니다.</p>
          </div>
          <div className="text_box">
            <div className="product_title">상품 이름</div>
            <form>
            <table className="product_info_table">
              <tr>
                <th>소비자가</th>
                <td>39999</td>
              </tr>
              <tr>
                <th>판매가</th>
                <td>25000</td>
              </tr>
              <tr>
                <th>배송비</th>
                <td>무료</td>
              </tr>
              <tr>
                <th>색상</th>
                <td>
                  <select name="color">
                    <option value="">색상 선택</option>
                    <option value="R">Red</option>
                    <option value="G">Blue</option>
                    <option value="B">Purple</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>사이즈</th>
                <td>
                  <select name="size">
                    <option value="">사이즈 선택</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </td>
              </tr>
            </table>
            <button className="select_button">선택</button>
            </form>
            <div className="selected_item">
              선택된 Item
            </div>
            <div className="detail_btn_box">
              <a className="detail_btn" href="#">구매하기</a>
              <a className="detail_btn" href="#">담기</a>
            </div>
          </div>
        </div>
        <div className="detail">
          <a name="detail_info_text"></a>
          <ul className="detail_menu">
            <li className="selected"><a href="#detail_info_text">상세 정보</a></li>
            <li><a href="#buy_guide">구매 안내</a></li>
            <li><a href="#used_review">사용 후기</a></li>
            <li><a href="#qna">Q & A</a></li>
          </ul>
          <ul className="detail_menu">
            <a name="buy_guide"></a>
            <li><a href="#detail_info_text">상세 정보</a></li>
            <li className="selected"><a href="#buy_guide">구매 안내</a></li>
            <li><a href="#used_review">사용 후기</a></li>
            <li><a href="#qna">Q & A</a></li>
          </ul>
          <ul className="detail_menu">
            <a name="used_review"></a>
            <li><a href="#detail_info_text">상세 정보</a></li>
            <li><a href="#buy_guide">구매 안내</a></li>
            <li className="selected"><a href="#used_review">사용 후기</a></li>
            <li><a href="#qna">Q & A</a></li>
          </ul>
          <ul className="detail_menu">
            <a name="qna"></a>
            <li><a href="#detail_info_text">상세 정보</a></li>
            <li><a href="#buy_guide">구매 안내</a></li>
            <li><a href="#used_review">사용 후기</a></li>
            <li className="selected"><a href="#qna">Q & A</a></li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail;