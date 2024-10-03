import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  function findPresent(p, d) {
    let result = ((p - d) / p) * 100;
    return result.toFixed(0)
  }
  return (
  <Link to={`/product/${data.id}`} className="product">
      <div className={`servis ${data.id % 2 === 0 ? "green" : "red"} `}>
        <div className="product-img">
          <img src={data.image} alt="" />
          {
          data.discount &&  <div className="discount">
          <div>
            -{findPresent(data.price, data.discountedPrice)}%
          </div>
        </div>
        }
         
          <div className="product-content">
            <h3>{data.title}</h3>
            <p>4.5</p>
          </div>
          <div className="prices">
            <p>120</p>
            <p>160</p>
            <h3>{data.findPresent}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
