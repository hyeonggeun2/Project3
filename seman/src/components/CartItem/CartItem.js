import React from 'react';
import './CartItem.css'

function CartItem(props){
  return(
    <div class="row data">
      <div class="subdiv">
        <div class="check"><input type="checkbox" name="buy" value="260" checked="true" onclick="javascript:basket.checkItem();"></input>&nbsp;</div>
        <div class="img"><img src={props.img} alt={props.itemname} width="60"></img></div>
        <div class="pname">
          <span>{props.itemname}</span>
        </div>
      </div>
      <div class="subdiv">
        <div class="basketprice"><input type="hidden" name="p_price" id="p_price1" class="p_price" value={props.price}></input>{props.price}</div>
        <div class="num">
          <div class="updown">
            <div>{props.amount}</div>
            <button onclick="javascript:basket.changePNum(1);" className="cart_btn">↑</button>
            <button onclick="javascript:basket.changePNum(1);" className="cart_btn">↓</button>
          </div>
        </div>
        <div class="sum">{props.price * props.amount}</div>
      </div>
      <div class="subdiv">
        <div class="basketcmd"><a href="javascript:void(0)" class="abutton" onclick="javascript:basket.delItem();">삭제</a></div>
      </div>
    </div>
  )
}

export default CartItem;