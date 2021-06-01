import React from "react";
import './Cart.css';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import CartItem from '../components/CartItem/CartItem'

function Cart(){
  return(
    <div>
      <Nav/>
      <h2>장바구니</h2>
      <form name="orderform" id="orderform" method="post" class="orderform" onsubmit="return false;">
        <input type="hidden" name="cmd" value="order"></input>
        <div class="basketdiv" id="basket">
          <div class="right-align basketrowcmd">
            <a href="javascript:void(0)" class="abutton" onclick="javascript:basket.delCheckedItem();">선택상품삭제</a>
            <a href="javascript:void(0)" class="abutton" onclick="javascript:basket.delAllItem();">장바구니비우기</a>
          </div>
          <div class="row head">
            <div class="subdiv">
              <div class="check">선택</div>
              <div class="img">이미지</div>
              <div class="pname">상품명</div>
            </div>
            <div class="subdiv">
              <div class="basketprice">가격</div>
              <div class="num">수량</div>
              <div class="sum">합계</div>
            </div>
            <div class="subdiv">
              <div class="basketcmd">삭제</div>
            </div>
            <div class="split"></div>
          </div>

          <CartItem itemname="스투스 반팔티" price={54000} amount = {2}
                    img="https://fitchinnom.com/web/product/big/202105/bd82c8b4544e1ffdf922921941f4d58b.jpg"/>
          <CartItem itemname="슈프림 반팔티" price={20000} amount = {1}
                    img="https://fitchinnom.com/web/product/big/202105/9e90ec92f301ada3070fcd8b5daedf52.jpg"/>
          <CartItem itemname="긴바지" price={33000} amount = {3}
                    img="https://fitchinnom.com/web/product/big/202105/30a78924901d19025f6980f08db6fda5.jpg"/>
        </div>
        
        <div class="bigtext right-align sumcount" id="sum_p_num">상품갯수: 4개</div>
        <div class="bigtext right-align box blue summoney" id="sum_p_price">합계금액: 74,200원</div>

        <div id="goorder" class="">
          <div class="clear"></div>
          <div class="buttongroup center-align cmd">
            <a href="javascript:void(0);">선택한 상품 주문</a>
          </div>
        </div>
      </form>
      <Footer/>
    </div>
  )
}

export default Cart;