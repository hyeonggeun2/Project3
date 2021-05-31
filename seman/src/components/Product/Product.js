import React, { Component } from 'react';
import './Product.css';

function Product(props){
  return(
    <div className="card">
      <figure>
        <img src={`data:image/jpeg;base64,${props.image}`} alt={props.name}/>
      </figure>
      <section className="details">
        <div className="min-details">
          <p className="product_name">{props.name}</p>
          <div className="price">
            <p className="only_original">{props.Price}원</p>
          </div>
        </div>

        <div className="options">
          <div className="options-size">
            <p className="option_title">sizes</p>
            <ul>
              {props.product_set.map((data) => {
                return (
                  <li>{data.split(", ")[1]}</li>
                )
              })}
            </ul>
          </div>

          <div className="options-colors">
            <p className="option_title">colors</p>
            <ul>
              {props.product_set.map((data) => {
                return (
                  <li style={{backgroundColor: data.split(", ")[0]}}></li>
                )
              })}
            </ul>
          </div>
        </div>
        <a href={props.detail} className="btn">Go Details</a>
      </section>
    </div>
  );
}

export default Product;