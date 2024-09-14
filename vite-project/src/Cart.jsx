import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    totalQuantity,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-center mt-2">Shopping Cart</h1>
      <div className="text-center fs-1 m-3">
        <div>
          <b>Total Cart Amount :</b> ${totalAmount.toFixed(2)}
        </div>
        <div>
          {" "}
          <b>Total Cart Quantity :</b> {totalQuantity}
        </div>
      </div>
      {cart.map((item) => (
        <Card key={item.id} className="m-5 bs">
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img src={item.thumbnail} className="img-fluid m-3" />
            </div>
            <div className="col-md-7 d-flex justify-content-center">
              <ul className="fs-2 ">
                <br />
                <li>
                  <b>Product Name : {item.title}</b>
                </li>
                <br />
                <li>
                  <b> Quantity :</b>{" "}
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span> {item.quantity} </span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </li>
                <br />
                <li>
                  <b>Rate :</b> ${item.price}
                </li>
                
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  size="large"
                  readOnly
                />

                <br />
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cart;