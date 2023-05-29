import React from "react";

import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={props.image} alt={props.productName} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
