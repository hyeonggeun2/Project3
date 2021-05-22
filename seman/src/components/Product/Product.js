import React, { Component } from 'react';
import './Product.css';

function Product(props){

  return(
    <div className="card">
      <figure>
        <img src={props.image} alt={props.name}/>
      </figure>
      <section className="details">
        <div className="min-details">
          <p className="product_name">{props.name}</p>
          {
            (() => {
              if (props.salePrice == 'undefined') return (
                <div className="price">
                  <p className="only_original">{props.originalPrice}원</p>
                </div>
              );
              else return (
                <div className="price">
                  <p className="original_price">{props.originalPrice}원</p>
                  <p className="sale_price">{props.salePrice}원</p>
                </div>
              );
            })()
          }
        </div>

        <div className="options">
          <div className="options-size">
            <p className="option_title">sizes</p>
            <ul>
              {props.sizes.map((size) => {
                return (
                  <li>{size}</li>
                )
              })}
            </ul>
          </div>

          <div className="options-colors">
            <p className="option_title">colors</p>
            <ul>
              {props.colors.map((color) => {
                return (
                  <li style={{backgroundColor: color}}></li>
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