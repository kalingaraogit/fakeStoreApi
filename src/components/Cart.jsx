import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, clearCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  
  const handleClear = () => {
    dispatch(clearCart());
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      
        <div  key={product.id} className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      
    );
  };
  
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
            <button
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
              onClick={handleClear}
            >
              Clear Cart
            </button>
            <button
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </div>
      </>
    );
  };

  const totalPrice = state.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  
  const handlePayment = () => {
    // Implement your payment logic here
    alert("Redirecting to payment gateway...");
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row justify-content-end">
            <h3 className="me-4">Total Price: ${totalPrice}</h3>
          </div>
        </div>
      </div>
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
